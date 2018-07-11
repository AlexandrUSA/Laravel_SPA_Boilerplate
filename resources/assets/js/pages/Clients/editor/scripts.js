import { mapActions, mapGetters } from 'vuex'

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
        first_name: '',
        last_name: '',
        email: '',
        patronymic: '',
        sex: '',
        passport: '',
        birthday: '',
        phone_number: '',
        country: '',
        city: '',
        street: '',
        number: '',
        tour_id: ''
      },
      pending: false,
      hasErrors: false,
      date: null,
      menu: false,
      modal: false,
      name: '',
      valid: false,
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
      client: 'clients/client',
      tours: 'tours/tours',
      creationError: 'clients/error',
      user: 'auth/user'
    }),
    errors () {
      return (this.creationError) ? this.creationError.errors : {}
    },
    title () {
      return (this.id) ? this.$t('edit_client') : this.$t('new_client')
    },
    titleIcon () {
      return (this.id) ? 'person' : 'person_add'
    }
  },
  methods: {
    ...mapActions({
      loadItem: 'clients/loadOne',
      addItem: 'clients/add',
      editItem: 'clients/edit'
    }),
    async save () {
      this.pending = true
      if (this.id) {
        await this.editItem(this.item)
      } else {
        await this.addItem(this.item)
      }
      if (!this.creationError) {
        this.$router.replace({ name: 'clients' })
      } else {
        this.pending = false
        this.hasErrors = true
      }
    },
    close () {
      this.$router.go(-1)
    }
  },
  async created () {
    if (this.id) {
      await this.loadItem(this.id)
      this.item = this.client
    }
  }
}
