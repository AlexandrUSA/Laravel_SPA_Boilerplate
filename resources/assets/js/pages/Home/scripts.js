import { mapGetters, mapActions } from 'vuex'
import moment from '~/plugins/moment'
import swal from 'sweetalert2'

export default {
  middleware: ['auth', 'activity'],
  metaInfo () {
    return {title: this.$t('home')}
  },
  data () {
    return {
      snack: false,
      snackColor: '',
      snackText: '',
      max25chars: (v) => v.length <= 25 || 'Слишком длинный текст!',
      statuses: ['Выполнено', 'Не выполнено'],

      dialog: false,
      dialogTasks: [],
      headers: [
        {
          text: 'Заголовок',
          value: 'title'
        },
        {
          text: 'Описание',
          value: 'desc'
        },
        {
          text: 'Выполнить к',
          value: 'date'
        },
        {
          text: 'Действия',
          align: 'left',
          sortable: false
        }
      ],
      voucherHeaders: [
        {
          text: 'Наименование тура',
          value: 'tour'
        },
        {
          text: 'Клиент',
          value: 'client'
        },
        {
          text: 'Дата вылета',
          value: 'departure_date'
        },
        {
          text: 'Дата возращения',
          value: 'arrival_date'
        }
      ]
    }
  },
  computed: {
    test () {
      return 1
    },
    expiredTasks () {
      return this.tasks.filter(el => {
        const date = el.date.split('/').join('-')
        return moment().diff(moment(date)) > 0
      })
    },
    todayTasks () {
      const today = moment().format('YYYY-MM-DD')
      return this.tasks.filter(el => el.date === today)
    },
    vouchersItems () {
      if (this.user.permissions.indexOf('crud-tours') !== -1) {
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
      }
      return []
    },
    ...mapGetters({
      user: 'auth/user',
      tasks: 'calendar/tasks',
      vouchers: 'vouchers/vouchers',
      clients: 'clients/clients',
      tours: 'tours/tours'
    })
  },
  methods: {
    ...mapActions({
      loadTasks: 'calendar/load',
      editTask: 'calendar/edit',
      deleteTask: 'calendar/remove',
      loadVouchers: 'vouchers/load'
    }),
    deleteTaskRequest (id) {
      swal({
        type: 'warning',
        title: 'Внимание',
        text: 'Вы действительно хотите удалить задание?',
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        confirmButtonColor: '#d33',
        confirmButtonText: this.$i18n.t('ok'),
        cancelButtonText: this.$i18n.t('cancel')
      }).then(access => {
        if (access.value) {
          this.deleteTask(id)
          const index = this.dialogTasks.findIndex(el => +el.id === +id)
          this.dialogTasks.splice(index, 1)
        }
      })
    },
    showExpired () {
      this.dialog = true
      this.dialogTasks = this.expiredTasks
    },
    showToday () {
      this.dialog = true
      this.dialogTasks = this.todayTasks
    },
    showAll () {
      this.dialog = true
      this.dialogTasks = this.tasks
    },

    save (task) {
      console.log(task)
      this.editTask(task)
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Данные сохранены'
    },
    cancel () {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = 'Отмена изменений'
    },
    open () {
      this.snack = true
      this.snackColor = 'info'
      this.snackText = 'Диалог открыт'
    },
    close () {
      console.log('Диалог закрыт')
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
    }
  },
  mounted () {
    if (!this.tasks.length) this.loadTasks()
    if (this.user.permissions.indexOf('crud-tours') !== -1) {
      this.loadVouchers()
    }
  }
}
