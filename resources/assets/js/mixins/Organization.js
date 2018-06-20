import { mapGetters } from 'vuex';

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
    }
  },
  computed: {
    ...mapGetters({
      positions: 'positions/positions',
      departments: 'departments/departments',
      employees: 'employees/employees'
    })
  },
  created () {
    if (this.searchProp) this.search = this.searchProp;
    if(!this.headers) {
      throw new Error('You must to specify table headers!')
    }
    if(!this.items) {
      throw new Error('You must to specify table items!')
    }
  }
}