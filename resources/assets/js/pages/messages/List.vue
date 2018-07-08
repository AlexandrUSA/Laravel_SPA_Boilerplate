<template>
  <div class="email">
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex xs12>
          <v-tabs
            v-model="active"
            dark
            slider-color="yellow"
          >
            <v-tab
              v-for="tab in tabs"
              :key="tab.id"
              ripple
            >
              {{ tab.title }}
            </v-tab>
            <v-tab-item
              v-for="tab in tabs"
              :key="tab.id"
            >
              <component :is="tab.component"
                         :received="received"
                         :sent="sent"
                         :toUser="toUser"
                         :oldMessage="oldMessage"
                         @goToEditor="goToEditor"/>
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import EmailSent from '~/components/messages/sent.vue'
  import EmailEditor from '~/components/messages/editor.vue'
  import EmailReceived from '~/components/messages/received.vue'

  export default {
    props: {
      fromChat: {
        default: null
      }
    },
    middleware: 'auth',
    metaInfo () {
      return {title: this.$t('nav-email')}
    },
    data: () => ({
      oldMessage: '',
      toUser: {},
      active: 0,
      tabs: [
        {
          id: '1',
          title: 'Полученные',
          component: 'EmailReceived'
        },
        {
          id: '2',
          title: 'Отправленные',
          component: 'EmailSent'
        },
        {
          id: '3',
          title: 'Написать',
          component: 'EmailEditor'
        }
      ]
    }),
    computed: {
      ...mapGetters({
        received: 'messages/received',
        sent: 'messages/sent'
      })
    },
    components: {
      EmailSent,
      EmailEditor,
      EmailReceived
    },
    methods: {
      goToEditor( data ) {
        this.toUser = {}
        this.toUser = data.user
        this.oldMessage = data.message || ''
        this.active = 2
      },
      ...mapActions({
        loadMessages: 'messages/load',
        loadUsers: 'employees/load'
      })
    },
    created () {
      this.loadMessages()
      this.loadUsers()
      if (this.fromChat) {
        this.active = 2
        this.toUser = this.fromChat
      }
    }
  }

</script>

<style scoped>
</style>
