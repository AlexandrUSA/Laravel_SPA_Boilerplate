import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  middleware: [`auth`],
  metaInfo () {
    return { title: this.$t('nav-chat') }
  },
  data () {
    return {
      snackbar: false,
      snackbarMessage: ``,
      snackbarTimeout: 10000,
      message: ``,
      messages: [],
      loading: false
    }
  },
  computed: mapGetters({
    user: 'auth/user',
    token: 'auth/token'
  }),
  methods: {
    insertName (user) {
      if (+user.id === +this.user.id) return
      this.message = `${user.last_name} ${user.name[0]}., `
      this.$refs.text.focus()
    },
    sendMessage () {
      if (this.message) {
        this.loading = true
        axios.post(`/api/chat/message`, { message: this.message })
        this.message = ``
      }
    },
    _showInfo (message) {
      this.snackbar = true
      this.snackbarMessage = message
    },
    async _getMessages () {
      const { data } = await axios.get(`/api/chat/message`)
      this.messages = data.reverse()
    }
  },
  mounted () {
    this._getMessages()
    const echo = new Echo({
      broadcaster: `pusher`,
      auth: {
        headers: { 'Authorization': 'Bearer ' + this.token }
      },
      key: `58095af5367d8a85356a`,
      cluster: `eu`,
      encrypted: true
    })

    echo.join(`chat-room`)
    .here(() => {
      this._showInfo(`Здесь будут показаны сообщения чата!`)
    })
    // Сработает при присоединении нового пользователя к каналу
    .joining(member => {
      this._showInfo(`Пользователь ${member.name} зашел в чат!`)
    })
    // Сработает при уходе пользователя с канала
    .leaving(member => {
      this._showInfo(`Пользователь ${member.name} покинул в чат!`)
    })
    // Прослушка события поступления нового сообщения
    echo.private(`chat-room`).listen(`ChatMessage`, (e) => {
      this.loading = false
      this.messages.push({ user: e.user, message: e.message })
    })
  }
}
