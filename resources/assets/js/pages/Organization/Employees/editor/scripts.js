import {mapActions, mapGetters} from 'vuex'
import axios from 'axios'

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
        name: '',
        last_name: '',
        email: '',
        password: '',
        patronymic: '',
        sex: '',
        passport: '',
        birthday: null,
        role_id: null,
        salary: '',
        phone_number: '',
        address: '',
        details: '',
        image_file: ''
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
    itemAvatar () {
      return (this.item.avatar) ? '/img/' + this.item.avatar : '/storage/avatars/no-avatar.jpg'
    },
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
  methods: {
    ...mapActions({
      loadItem: 'employees/loadOne',
      addItem: 'employees/add',
      editItem: 'employees/edit'
    }),
    async updatePhoto (file) {
      const { data } = await axios.post('/api/organisation/employees/' + this.id + '/avatar', {
        image: file
      })
      this.item.avatar = data
    },
    async save () {
      if (this.valid) {
        this.pending = true
        if (this.id) {
          await this.editItem(this.item)
        } else {
          await this.addItem(this.item)
        }
        if (!this.creationError) {
          this.$router.replace({ name: 'employees' })
        } else {
          this.pending = false
          this.hasErrors = true
        }
      }
    },
    close () {
      this.$router.go(-1)
    }
  },
  async created () {
    if (this.id) {
      const { data } = await axios.get('/api/organisation/employees/' + this.id)
      this.item = data
    }
  }
}
