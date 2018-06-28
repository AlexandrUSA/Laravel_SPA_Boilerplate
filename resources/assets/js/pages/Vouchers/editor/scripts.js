import {mapActions, mapGetters} from 'vuex'
import  axios from 'axios';

export default {
  middleware: ['auth', 'organisation'],
  props: {
    id: {
      default: null
    }
  },
  data () {
    return {
      item: {
        name: '1',
        last_name: '2',
        email: '3',
        password: '4',
        patronymic: '5',
        sex: 'Женский',
        passport: '3',
        birthday: null,
        role_id: 1,
        salary: '88',
        phone_number: '999999999',
        address: '11',
        details: '12'
      },
      date: null,
      menu: false,
      modal: false,
      name: '',
      valid: false,
      pending: false,
      hasErrors: false,
      nameRules: [
        v => !!v || 'Введите значение',
        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы'
      ],
      emailRules: [
        v => !!v || 'Введите E-mail',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Не валидный E-mail'
      ]
    }
  },
  computed: {
    ...mapGetters({
      positions: 'positions/positions',
      creationError: 'employees/error'
    }),
    errors () {
      return (this.creationError) ? this.creationError.errors : {}
    },
    title () {
      return (this.id) ? this.$t('edit_employee') : this.$t('new_employee')
    },
    titleIcon () {
      return (this.id) ? 'person' : 'person_add'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.id) {
        vm.$store.dispatch('employees/loadOne', vm.id)
        vm.item = vm.employee
      }
    })
  },
  methods: {
    ...mapActions({
      loadItem: 'employees/loadOne',
      addItem: 'employees/add'
    }),
    async save () {
      this.pending = true
      await this.addItem(this.item)
      if (!this.creationError) {
        this.$router.replace({ name: 'employees' })
      } else {
        this.pending = false
        this.hasErrors = true
        console.log(this.creationError.errors)
      }
    },
    close () {
      this.$router.go(-1)
    }
  },
  async created () {
    const { data } = await axios.get('/api/organisation/employees/1')
    console.log(data)
  }
}
