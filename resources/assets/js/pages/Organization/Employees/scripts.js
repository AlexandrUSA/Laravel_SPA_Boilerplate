import { mapActions, mapGetters } from 'vuex';
import Organization from '~/mixins/Organization';
import swal from 'sweetalert2'

export default {
  middleware: ['auth', 'organisation'],
  mixins: [ Organization ],
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
    // Заголовки таблицы
    headers () {
      return  [
        {
          text: this.$t('name'),
          value: 'first_name'
        },
        {
          text: this.$t('last_name'),
          value: 'last_name'
        },
        {
          text: this.$t('position'),
          value: 'position'
        },
        {
          text: this.$t('department'),
          value: 'department'
        },
        {
          text: this.$t('actions'),
          align: 'left',
          sortable: false
        }
      ]
    },
    items () {
      const data = [];
      this.employees.forEach(el => {
        data.push({
          id: el.id,
          first_name: el.first_name,
          last_name: el.last_name || 'Нет данных',
          position: this._getPosition(el.position_id).title || 'Нет данных',
          department: this._getDepartment(el.position_id).title || 'Нет данных'
        })
      });
      return data;
    },
    deleteMsg () {
      return (this.selected.length === 1) ? this.$t('delete_item_confirm') :
        this.$t('delete_items_confirm');
    },
    ...mapGetters({
      'user': 'auth/user'
    })
  },
  methods: {
    _getPosition(position_id) {
      return this.positions.find(el => +el.id === +position_id) || {};
    },
    _getDepartment(position_id) {
      const position = this._getPosition(position_id);
      return this.departments.find(el => +el.id === +position.department_id) || {};
    },
    /**
     * Открыть диалог удаления сотрудника
     */
    deleteDialog() {
      if(this.selected.find(el => +el.id === +this.user.id)) {
        swal({
          type: 'error',
          title: 'Внимание',
          text: 'Вы не можете удалить самого себя',
          reverseButtons: true,
          confirmButtonText: this.$i18n.t('ok')
        })
      } else {
        this.deleteWindow = true;
      }
    },
    /**
     * Удаление сотрудника
     */
    deleteConfirm() {
      this.selected.forEach(el => this.deleteItem(el.id));
      this.selected = [];
      this.deleteWindow = false;
      this.snackbarShow = true;
    },
    /**
     * Отмена удаления
     */
    deleteCancel() {
      this.deleteWindow = false;
    },
    loadItems (archive) {
      if (archive) {
        this.getArchive();
      } else {
        this.getEmployees()
      }
      this.isArchive = archive;
    },
    ...mapActions({
      deleteItem: 'employees/remove',
      getArchive: 'employees/getArchive',
      getEmployees: 'employees/load'
    })
  },
  beforeDestroy () {
    this.getEmployees();
  }
}