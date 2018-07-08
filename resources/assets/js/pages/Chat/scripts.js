import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import axios from 'axios'

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
      messages: []
    }
  },
  computed: {},
  methods: {
    sendMessage () {
      if (this.message) {
        axios.post(`/api/chat/message`, { message: this.message })
      }
    },
    _showInfo (message) {
      this.snackbar = true
      this.snackbarMessage = message
    },
    _addNewMessage (user, message) {
      this.messages.push({ user, message })
      this.message = ``
    },
    async _getMessages () {
      const { data } = await axios.get(`/api/chat/message`)
      console.log(data)
    }
  },
  mounted () {
    this._getMessages()
    const echo = new Echo({
      broadcaster: `pusher`,
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

    echo.private(`chat-room`).listen(`ChatMessage`, (e) => {
      this._addNewMessage(e.user, e.message)
    })
  }
}
