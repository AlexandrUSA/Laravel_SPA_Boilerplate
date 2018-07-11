import {mapActions, mapGetters} from 'vuex'
import  axios from 'axios';

export default {
  middleware: ['auth', 'activity'],
  props: {
    id: { default: null }
  },
  data () {
    return {
      item: {
        title: 'Т',
        service: 'Автобусный тур',
        country: 'Турция',
        transport: 'Автобус',
        visa_service: true,
        accommodation: false,
        days: 12,
        price: 560
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
      tours: 'tours/tours',
      tour: 'tours/tour',
      creationError: 'tours/error',
      user: 'auth/user'
    }),
    errors () {
      return (this.creationError) ? this.creationError.errors : {}
    },
    title () {
      return (this.id) ? this.$t('edit_tour') : this.$t('new_tour')
    }
  },
  methods: {
    ...mapActions({
      loadItem: 'tours/loadOne',
      addItem: 'tours/add',
      editItem: 'tours/edit'
    }),
    async save () {
      this.pending = true
      if (this.id) {
        await this.editItem(this.item)
      } else {
        await this.addItem(this.item)
      }
      if (!this.creationError) {
        this.$router.replace({ name: 'tours' })
      } else {
        this.pending = false
        this.hasErrors = true
      }
    },
    close () {
      this.$router.go(-1)
    }
  },
  async mounted () {
    if (this.id) {
      await this.loadItem(this.id)
      this.item = this.tour
    }
  }
}
