import { mapActions } from 'vuex'
import Organization from '~/mixins/Organization'
export default {
  middleware: ['auth', 'organisation'],
  mixins: [ Organization ],
  metaInfo () {
    return { title: this.$t('departments') }
  },
  data () {
    return {
      // Всплывашки
      snackbarShow: false,
      snackbarTimeout: 10000,
      snackbarMessage: '',
      // Удаление
      deleteIndex: null,
      deleteDenied: false,
      // Создание
      departmentCreate: false,
      departmentName: '',
      // Заголовки таблицы
      headers: [
        {
          text: 'Номер',
          align: 'left',
          sortable: false
        },
        {
          text: 'Наименование',
          value: 'title'
        },
        {
          text: 'Должностей',
          value: 'positions'
        },
        {
          text: 'Сотрудников',
          value: 'employees'
        },
        {
          text: 'Действия',
          value: 'action'
        }
      ]
    }
  },
  computed: {
    items () {
      const data = []
      this.departments.forEach(el => {
        data.push({
          id: el.id,
          title: el.title,
          positions: this._getPositions(el.id).length,
          employees: this._getEmployees(el.id).length
        })
      })
      return data
    },
    deleteMsg () {
      return (this.deleteDenied) ? 'За данным отлелом закреплены сотрудники'
        : 'Вы действительно хотите расформировать данный отдел?'
    }
  },
  methods: {
    /**
     * Функция возращает список всех должностей, закрепленных за отделом
     * @param id
     * @returns {Array}
     * @private
     */
    _getPositions (id) {
      let positions = []
      this.positions.forEach(el => {
        if (+el.department_id === +id) positions.push(el)
      })
      return positions
    },
    /**
     * Функция возращает список всех сотрудников отдела
     * @param id
     * @returns {Array}
     * @private
     */
    _getEmployees (id) {
      return this.employees.filter(el => el.department_id === id)
      // let employees = []
      // let positions = this._getPositions(id)
      // positions.forEach(pos => {
      //   this.employees.forEach(el => {
      //     if (+el.position_id === +pos.id) employees.push(el)
      //   })
      // })
      // return employees
    },
    /**
     * Создание подразделения
     * Отправляем на сервер обьект с названием
     * Закрываем окно и показываем всплывашку
     */
    addConfirm () {
      this.addItem({
        'title': this.departmentName
      })
      this.departmentCreate = false
      this.snackbarShow = true
      this.snackbarMessage = this.$t('add_done')
    },
    /**
     * Отмена удаления
     */
    addCancel () {
      this.departmentCreate = false
    },
    /**
     * Проверка на наличие в отделе сотрудников
     * @param id
     * @returns {Number}
     * @private
     */
    _hasEmployees (id) {
      return this._getEmployees(id).length
    },
    /**
     * Открыть диалог удаления
     * @param id
     */
    deleteItem (id) {
      this.deleteWindow = true
      if (this._hasEmployees(id)) {
        this.deleteDenied = true
      } else {
        this.deleteIndex = id
        this.deleteDenied = false
      }
    },
    /**
     * Подтверждение удаления
     */
    deleteConfirm () {
      this.deleteWindow = false
      this.remove(this.deleteIndex)
      this.deleteIndex = null
      this.snackbarShow = true
      this.snackbarMessage = this.$t('delete_done')
    },
    /**
     * Отмена удаления
     */
    deleteCancel () {
      this.deleteWindow = false
      this.deleteIndex = null
    },
    ...mapActions({
      loadItems: 'departments/load',
      addItem: 'departments/add',
      editItem: 'departments/edit',
      remove: 'departments/remove'
    })
  }
}