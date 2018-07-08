import { mapActions, mapGetters } from 'vuex'
import moment from '~/plugins/moment'

export default {
  props: {
    searchProp: {
      type: String,
      default: ''
    }
  },
  middleware: ['auth', 'activity'],
  metaInfo () {
    return { title: this.$t('nav-vouchers') }
  },
  data () {
    return {
      valid: false,
      /* Подсказки о результате удаления */
      snackbarShow: false,
      snackbarTimeout: 10000,
      // Поиск / Выборка
      search: '',
      selected: [],
      isArchive: false,
      deleteWindow: false,
      // Добавление
      creation: true,
      tourCreate: false,
      arrivalDate: false,
      departDate: false,
      editedIndex: null,
      date1: null,
      date2: null,
      editedTour: {
        id: '',
        tour_id: '',
        client_id: '',
        employee_id: '',
        departure_date: '',
        arrival_date: ''
      },
      initialTour: {
        id: '',
        tour_id: '',
        client_id: '',
        employee_id: '',
        departure_date: '',
        arrival_date: ''
      }
    }
  },
  watch: {
    'editedTour.departure_date': function () {
      if (this.editedTour.tour_id) {
        const dep = this.editedTour.departure_date
        const tour = this._getTour(this.editedTour.tour_id)
        this.editedTour.arrival_date = moment(dep).add(tour.days, 'd').format('YYYY-MM-DD')
      }
    }
  },
  computed: {
    cardTitle () {
      return (this.isArchive) ? 'Архив путевок' : 'Список путевок'
    },
    // Заголовки таблицы
    headers () {
      return [
        {
          text: this.$t('tour'),
          value: 'tour'
        },
        {
          text: this.$t('client'),
          value: 'client'
        },
        {
          text: this.$t('departure_date'),
          value: 'departure_date'
        },
        {
          text: this.$t('arrival_date'),
          value: 'arrival_date'
        },
        {
          text: this.$t('actions'),
          align: 'left',
          sortable: false
        }
      ]
    },
    items () {
      const data = []
      this.vouchers.forEach(el => {
        data.push({
          id: el.id,
          tour_id: el.tour_id,
          tour: this._getTour(el.tour_id).title || 'Нет данных',
          client_id: el.client_id,
          client: this._getClientName(el.client_id),
          employee_id: el.employee_id,
          departure_date: el.departure_date,
          arrival_date: el.arrival_date
        })
      })
      return data
    },
    deleteMsg () {
      return (this.selected.length === 1) ? this.$t('delete_item_confirm')
        : this.$t('delete_items_confirm')
    },
    ...mapGetters({
      clients: 'clients/clients',
      tours: 'tours/tours',
      vouchers: 'vouchers/vouchers',
      user: 'auth/user',
      loading: 'httpPending'
    })
  },
  methods: {
    editItem (item) {
      this.creation = false
      this.editedTour = Object.assign({}, item)
      this.tourCreate = true
    },
    createItem () {
      this.tourCreate = true
      this.creation = true
    },
    _getTour (tourID) {
      return this.tours.find(tour => +tour.id === +tourID) || {}
    },
    _getClientName (clientID) {
      const client = this.clients.find(client => +client.id === +clientID)
      if (client) {
        return `${client.last_name} ${client.first_name[0]}. ${client.patronymic[0]}`
      } else {
        return `Нет данных`
      }
    },
    addConfirm () {
      if (this.creation) {
        this.editedTour.employee_id = this.user.id
        this.addItem(this.editedTour)
        this.editedTour = Object.assign({}, this.initialTour)
      } else {
        this.edit(this.editedTour)
      }
      this.tourCreate = false
    },
    addCancel () {
      this.tourCreate = false
      this.editedTour = Object.assign({}, this.initialTour)
    },
    /**
     * Открыть диалог удаления путевки
     */
    deleteDialog () {
      this.deleteWindow = true
    },
    /**
     * Удаление путевки
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
    loadItems (archive) {
      if (archive) {
        this.getArchive()
      } else {
        this.getItems()
      }
      this.isArchive = archive
    },
    ...mapActions({
      addItem: 'vouchers/add',
      deleteItem: 'vouchers/remove',
      edit: 'vouchers/edit',
      getArchive: 'vouchers/getArchive',
      getItems: 'vouchers/load'
    })
  },
  created () {
    if (this.searchProp) {
      this.search = this.searchProp
    }
  }
}
