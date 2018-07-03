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
        first_name: 'Михаил',
        last_name: 'Гриневич',
        email: '1',
        patronymic: 'Владимирович',
        sex: 'Мужской',
        passport: '342343',
        birthday: '',
        phone_number: '+39999999999',
        country: 'Россия',
        city: 'Москва',
        street: 'Тверская',
        number: '12',
        tour_id: '1'
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
