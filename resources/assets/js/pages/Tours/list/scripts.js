import { mapActions, mapGetters } from 'vuex'

export default {
  middleware: ['auth', 'activity'],
  data () {
    return {
      /* Подсказки о результате удаления */
      snackbarShow: false,
      snackbarTimeout: 10000,
      // Поиск / Выборка
      search: '',
      selected: [],
      // Удаление
      deleteWindow: false,
      delMode: 'single',
      // Заголовки таблицы
      headers: [
        {
          text: 'Название',
          value: 'title'
        },
        {
          text: 'Страна',
          value: 'country'
        },
        {
          text: 'Дней',
          value: 'days'
        },
        {
          text: 'Цена',
          value: 'price'
        },
        {
          text: 'Путевок',
          value: 'vouchers'
        },
        {
          text: 'Действия',
          align: 'left',
          sortable: false
        }
      ]
    }
  },
  computed: {
    items () {
      const data = []
      this.tours.forEach(tour => {
        data.push({
          title: tour.title,
          country: tour.country,
          service: this.services.find(el => +el.id === tour.service_id) || {},
          transport: tour.transport,
          visaService: tour.visa_service,
          accommodation: tour.accommodation,
          vouchers: this.vouchers.filter(el => +el.id === tour.id) || [],
          days: tour.days,
          price: tour.price
        })
      })
      return data
    },
    deleteMsg () {
      return (this.selected.length === 1) ? this.$t('delete_item_confirm')
        : this.$t('delete_items_confirm')
    },
    ...mapGetters({
      'tours': 'tours/tours',
      'services': 'services/services',
      'vouchers': 'vouchers/vouchers'
    })
  },
  methods: {
    /**
     * Открыть диалог удаления тура
     */
    deleteDialog () {
      this.deleteWindow = true
    },
    /**
     * Удаление тура
     */
    deleteConfirm () {
      this.selected.forEach(el => this.deleteItem(el.id))
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
    ...mapActions({
      deleteItem: 'tours/remove'
    })
  }
}
