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
      dialog: false,
      valid: false,
      /* Подсказки о результате удаления */
      snackbarShow: false,
      snackbarTimeout: 10000,
      // Поиск / Выборка
      search: '',
      selected: [],
      deleteWindow: false,
      // Добавление
      creation: true,
      editedIndex: null,
      edited: {
        id: '',
        name: 'Гриневич Александр Владимирович',
        card: '4111111111111111',
        email: 'AlexandrUSA@yandex.ru',
        description: 'Директор фирмы'
      },
      initial: {
        id: '',
        name: '',
        card: '',
        email: '',
        description: ''
      }
    }
  },
  computed: {
    cardTitle () {
      return 'Список потребителей'
    },
    // Заголовки таблицы
    headers () {
      return [
        {
          text: 'ID',
          value: 'id'
        },
        {
          text: 'ФИО',
          value: 'name'
        },
        {
          text: 'Номер карты',
          value: 'card'
        }
      ]
    },
    deleteMsg () {
      return (this.selected.length === 1) ? this.$t('delete_item_confirm')
        : this.$t('delete_items_confirm')
    },
    ...mapGetters({
      recipients: 'balance/recipients',
      loading: 'httpPending'
    })
  },
  methods: {
    editItem (item) {
      this.dialog = true
      this.creation = false
      this.editedTour = Object.assign({}, item)
    },
    createItem () {
      this.dialog = true
      this.creation = true
    },
    editorConfirm () {
      if (this.creation) {
        console.log('add')
        this.addItem(this.edited)
        this.edited = Object.assign({}, this.initial)
      } else {
        console.log('adit')
        this.edit(this.editedTour)
      }
      this.dialog = false
    },
    editorCancel () {
      this.dialog = false
      this.edited = Object.assign({}, this.initial)
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
    ...mapActions({
      addItem: 'balance/addRecipient',
      deleteItem: 'vouchers/remove',
      edit: 'vouchers/edit'
    })
  }
}
