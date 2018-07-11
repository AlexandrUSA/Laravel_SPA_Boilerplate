import { mapActions, mapGetters } from 'vuex'
import Organization from '~/mixins/Organization'
import swal from 'sweetalert2'

import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

export default {
  middleware: ['auth', 'organisation'],
  mixins: [ Organization ],
  metaInfo () {
    return { title: this.$t('employees') }
  },
  data () {
    return {
      /* Подсказки о результате удаления */
      snackbarShow: false,
      snackbarTimeout: 10000,
      // Поиск / Выборка
      selected: [],
      isArchive: false
    }
  },
  computed: {
    cardTitle () {
      return (this.isArchive) ? this.$t('employees_archive') : this.$t('employees')
    },
    // Заголовки таблицы
    headers () {
      return [
        {
          text: this.$t('name'),
          value: 'name'
        },
        {
          text: this.$t('last_name'),
          value: 'last_name'
        },
        {
          text: this.$t('position'),
          value: 'role_title'
        },
        {
          text: this.$t('department'),
          value: 'department_title'
        },
        {
          text: this.$t('actions'),
          align: 'left',
          sortable: false
        }
      ]
    },
    items () {
      return this.employees
    },
    deleteMsg () {
      return (this.selected.length === 1) ? this.$t('delete_item_confirm')
        : this.$t('delete_items_confirm')
    },
    loading () {
      return this.$store.getters['httpPending']
    },
    ...mapGetters({
      'user': 'auth/user'
    })
  },
  methods: {
    _getPosition (positionID) {
      return this.positions.find(el => +el.id === +positionID) || {}
    },
    _getDepartment (positionID) {
      const position = this._getPosition(positionID)
      return this.departments.find(el => +el.id === +position.department_id) || {}
    },
    /**
     * Открыть диалог удаления сотрудника
     */
    deleteDialog () {
      if (this.selected.find(el => +el.id === +this.user.id)) {
        swal({
          type: 'error',
          title: 'Внимание',
          text: 'Вы не можете удалить самого себя',
          reverseButtons: true,
          confirmButtonText: this.$i18n.t('ok')
        })
      } else {
        this.deleteWindow = true
      }
    },
    /**
     * Удаление сотрудника
     */
    deleteConfirm () {
      if (this.isArchive) {
        this.selected.forEach(el => this.removeFromArchive(el.id))
        this.loadItems(true)
      } else {
        this.selected.forEach(el => this.deleteItem(el.id))
      }
      this.selected = []
      this.deleteWindow = false
      this.snackbarShow = true
    },
    /**
     * Отмена удаления
     */
    deleteCancel () {
      this.deleteWindow = false
    },
    loadItems (archive) {
      if (archive) {
        this.getArchive()
      } else {
        this.getEmployees()
      }
      this.isArchive = archive
    },
    ...mapActions({
      deleteItem: 'employees/remove',
      removeFromArchive: 'employees/removeFromArchive',
      getArchive: 'employees/getArchive',
      getEmployees: 'employees/load'
    })
  },
  created () {
    const echo = new Echo({
      broadcaster: `pusher`,
      key: `58095af5367d8a85356a`,
      cluster: `eu`,
      encrypted: true
    })
    echo.join(`permission-chanel`)
    echo.private(`permission-chanel`).listen(`PermissionChanged`, (e) => {
      console.log(21)
    })
  },
  beforeDestroy () {
    this.getEmployees()
  }
}
