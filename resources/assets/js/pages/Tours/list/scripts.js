import { mapActions, mapGetters } from 'vuex'

export default {
  middleware: ['auth', 'activity'],
  metaInfo () {
    return { title: this.$t('nav-tours') }
  },
  data () {
    return {
      /* Подсказки о результате удаления */
      snackbarShow: false,
      snackbarTimeout: 10000,
      isArchive: false,
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
          id: tour.id,
          title: tour.title,
          country: tour.country,
          service: this.services.find(el => +el.id === tour.service_id) || {},
          transport: tour.transport,
          visaService: tour.visa_service,
          accommodation: tour.accommodation,
          vouchers: this.vouchers.filter(el => +el.tour_id === tour.id) || [],
          days: tour.days,
          price: tour.price
        })
      })
      return data
    },
    title () {
      return this.isArchive ? this.$t('tours-archive') : this.$t('nav-tours')
    },
    deleteMsg () {
      return (this.selected.length === 1) ? this.$t('delete_item_confirm')
        : this.$t('delete_items_confirm')
    },
    ...mapGetters({
      'tours': 'tours/tours',
      'services': 'services/services',
      'vouchers': 'vouchers/vouchers',
      'loading': 'httpPending'
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
      if (this.isArchive) {
        this.selected.forEach(el => this.removeFromArchive(el.id))
      } else {
        this.selected.forEach(el => this.deleteItem(el.id))
      }
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
    loadItems (archive) {
      if (archive) {
        this.getArchive()
      } else {
        this.getItems()
      }
      this.isArchive = archive
    },
    ...mapActions({
      getItems: 'tours/load',
      deleteItem: 'tours/remove',
      removeFromArchive: 'tours/removeFromArchive',
      getArchive: 'tours/getArchive'
    })
  }
}
