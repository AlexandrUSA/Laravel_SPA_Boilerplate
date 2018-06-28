import moment from '~/plugins/moment'
import Form from 'vform'
import axios from 'axios'

export default {
  data () {
    return {
      deleteDialog: false,
      createDialog: false,
      showIndex: -1,
      selected: [],
      newEvent: new Form({
        date: '',
        title: '',
        desc: '',
        completed: 0,
        expired: 0
      }),
      // newEvent: {
      //   date: '',
      //   title: '',
      //   desc: '',
      //   completed: false,
      //   expired: false
      // },
      events: [
        {
          id: 0,
          date: '2018/09/28',
          title: 'Позвонить танечке',
          completed: false,
          expired: false
        },
        {
          id: 1,
          date: '2018/06/15',
          title: 'Собеседование с Калигулой',
          desc: 'Бог мне в помощь!',
          customClass: 'disabled highlight', // Custom classes to an calendar cell
          completed: false,
          expired: false
        }
      ]
    }
  },
  computed: {
    headers () {
      return [
        {
          text: this.$t('task'),
          value: 'title'
        },
        {
          text: this.$t('expiry'),
          value: 'date'
        },
        {
          text: this.$t('actions'),
          align: 'left',
          sortable: false
        }
      ]
    }
  },
  watch: {
    events () {
      this.setEventStatus()
    }
  },
  methods: {
    findIndex (itemID) {
      return this.selected.findIndex(el => el === itemID)
    },
    toggleShowItem (itemID) {
      const index = this.findIndex(itemID)
      if (index === -1) {
        this.selected.push(itemID)
      } else {
        this.selected.splice(index, 1)
      }
    },
    handleDayChanged (e) {
      const date = e.date.split('/')
      date.forEach((el, index) => {
        if (el.length === 1) {
          date[index] = 0 + el
        }
      })
      this.newEvent.date = date.join('-')
    },
    async requestNewTask () {
      const { data } = await this.newEvent.post('/api/tasks')
      this.events.push(data)
    },
    newTask () {
      this.createDialog = false
      const newDate = this.newEvent.date.split('/').join('-')
      console.log(newDate)
      if (moment().diff(moment(newDate)) < 0) {
        this.requestNewTask()
        this.resetNewTask()
      } else {
      }
    },
    resetNewTask () {
      this.newEvent.date = ''
      this.newEvent.title = ''
      this.newEvent.desc = ''
    },
    async addToCompleted () {
      await axios.post('/api/tasks/updateStatus', {
        id: this.selected
      })
      this.events.forEach(el => {
        if (this.selected.indexOf(el.id) !== -1) {
          el.completed = true
        }
      })
      this.selected = []
    },
    removeItems () {
      this.deleteDialog = false
      this.events.forEach((el, index) => {
        if (this.selected.indexOf(el.id) !== -1) {
          this.events.splice(index, 1)
        }
      })
      this.selected = []
    },
    setEventStatus () {
      this.events.forEach(el => {
        const date = el.date.split('/').join('-')
        if (moment().diff(moment(date)) > 0) {
          el.expired = true
        }
      })
    }
  },
  async created () {
    console.log(this.$t('cancel'))
    const { data } = await axios({
      method: 'get',
      url: '/api/tasks'
    })
    this.events = data
    this.setEventStatus()
  }
}
