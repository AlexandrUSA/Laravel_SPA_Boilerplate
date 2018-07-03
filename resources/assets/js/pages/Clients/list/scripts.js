import { mapActions, mapGetters } from 'vuex'

export default {
  middleware: ['auth', 'activity'],
  data () {
    return {
      /* Подсказки о результате удаления */
      snackbarShow: false,
      snackbarTimeout: 10000,
      isArchive: false,
      // Поиск / Выборка
      selected: [],
      search: '',
      // Удаление
      deleteWindow: false,
      delMode: 'single'
    }
  },
  computed: {
    ...mapGetters({
      clients: 'clients/clients',
      tours: 'tours/tours',
      loading: 'httpPending'
    }),
    // Заголовки таблицы
    headers () {
      return [
        {
          text: this.$t('fio'),
          value: 'fio'
        },
        {
          text: this.$t('country'),
          value: 'country'
        },
        {
          text: this.$t('city'),
          value: 'city'
        },
        {
          text: this.$t('street'),
          value: 'street'
        },
        {
          text: this.$t('number'),
          value: 'number'
        },
        {
          text: this.$t('tour'),
          value: 'tour'
        },
        {
          text: this.$t('actions'),
          align: 'left',
          sortable: false
        }
      ]
    },
    title () {
      return this.isArchive ? this.$t('clients-archive') : this.$t('nav-clients')
    },
    items () {
      const data = []
      this.clients.forEach(el => {
        data.push({
          id: el.id,
          fio: `${el.last_name} ${el.first_name[0]}. ${el.patronymic[0]}.`,
          city: el.city,
          country: el.country,
          street: el.street,
          number: el.number,
          passport: el.passport,
          tour: this.tours.find(tour => +tour.id === +el.tour_id) || {}
        })
      })
      return data
    },
    deleteMsg () {
      return (this.selected.length === 1) ? this.$t('delete_item_confirm')
        : this.$t('delete_items_confirm')
    }
  },
  methods: {
    /**
     * Открыть диалог удаления клиента
     */
    deleteDialog () {
      this.deleteWindow = true
    },
    /**
     * Удаление клиента
     */
    deleteConfirm () {
      if (this.isArchive) {
        this.selected.forEach(el => this.removeFromArchive(el.id))
        this.loadItems(true)
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
        this.getEmployees()
      }
      this.isArchive = archive
    },
    ...mapActions({
      deleteItem: 'clients/remove',
      removeFromArchive: 'clients/removeFromArchive',
      getArchive: 'clients/getArchive',
      getEmployees: 'clients/load'
    })
  }
}