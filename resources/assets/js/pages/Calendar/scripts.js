import moment from '~/plugins/moment'
import Form from 'vform'
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  middleware: ['auth'],
  metaInfo () {
    return { title: this.$t('nav-calendar') }
  },
  data () {
    return {
      valid: false,
      dateSelectMenu: false,
      deleteDialog: false,
      createDialog: false,
      showIndex: -1,
      selected: [],
      newEvent: new Form({
        user_id: '',
        date: '',
        title: '',
        desc: '',
        completed: 0,
        expired: 0
      }),
      events: []
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      tasks: 'calendar/tasks'
    })
  },
  watch: {
    events () {
      this.setEventStatus()
    }
  },
  methods: {
    ...mapActions({
      load: 'calendar/load',
      add: 'calendar/add',
      edit: 'calendar/edit',
      remove: 'calendar/remove'
    }),
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
      this.newEvent.user_id = this.user.id
      const { data } = await this.newEvent.post('/api/tasks')
      this.events.push(data)
    },
    newTask () {
      this.createDialog = false
      const newDate = this.newEvent.date.split('/').join('-')
      if (moment().diff(moment(newDate)) < 0) {
        this.requestNewTask()
        this.resetNewTask()
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
        if (moment().diff(moment(date)) > 0 && !el.completed) {
          el.expired = true
          el.customClass = 'event-expired'
        }
        el.date = el.date.split('-').join('/')
      })
    }
  },
  async created () {
    this.events = this.tasks
    this.setEventStatus()
  }
}
