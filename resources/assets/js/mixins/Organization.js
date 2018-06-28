import { mapGetters } from 'vuex'

export default {
  props: {
    searchProp: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // Поисковая строка
      search: '',
      // Удаление
      deleteWindow: false,
      // Ожидание ответа от сервера
      pending: false
    }
  },
  computed: {
    ...mapGetters({
      departments: 'departments/departments',
      employees: 'employees/employees',
      permissions: 'permissions/permissions',
      positions: 'positions/positions'
    })
  },
  created () {
    if (this.searchProp) {
      this.search = this.searchProp
    }
    if (!this.headers) {
      throw new Error('You must to specify table headers!')
    }
    if (!this.items) {
      throw new Error('You must to specify table items!')
    }
  }
}