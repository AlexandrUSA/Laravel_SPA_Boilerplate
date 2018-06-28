import { mapActions, mapGetters } from 'vuex'

export default {
  middleware: ['auth', 'activity'],
  data () {
    return {
      /* Подсказки о результате удаления */
      snackbarShow: false,
      snackbarTimeout: 10000,
      // Поиск / Выборка
      selected: [],
      search: '',
      // Удаление
      deleteWindow: false,
      delMode: 'single',
      // Заголовки таблицы
      headers: [
        {
          text: 'ФИО',
          value: 'name'
        },
        {
          text: 'Страна',
          value: 'country'
        },
        {
          text: 'Город',
          value: 'city'
        },
        {
          text: 'Улица',
          value: 'street'
        },
        {
          text: 'Номер',
          value: 'number'
        },
        {
          text: 'Тур',
          value: 'tour'
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
    ...mapGetters({
      clients: 'clients/clients',
      tours: 'tours/tours'
    }),
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
          tour: this.tours.find(tour => +tour.id === +el.tour_id)
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
      deleteItem: 'clients/remove'
    })
  }
}