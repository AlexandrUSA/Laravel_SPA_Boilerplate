<template>
    <v-card flat>
        <v-dialog
          v-model="showEmail"
          max-width="600"
        >
            <v-card>
                <v-card-title class="headline">{{ getName(current.user) }}</v-card-title>

                <v-card-text>
                    {{ current.message }}
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      color="green darken-1"
                      flat="flat"
                      @click="deleteItem"
                    >
                        Удалить
                    </v-btn>

                    <v-btn
                      color="green darken-1"
                      flat="flat"
                      @click="makeResponse"
                    >
                        Переслать
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-card-title>
            <h3>Отправленные</h3>
        </v-card-title>
        <v-card-text>
            <v-list-tile
              v-for="item in items"
              :key="item.id"
              avatar
              @click="watchEmail(item)"
              class="email-item"
            >
                <v-list-tile-avatar>
                    <v-icon :class="[item.className]">{{ icon }}</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>
                        <h4>{{ item.user ? item.user.last_name : 'Нет данных' }}</h4>
                    </v-list-tile-title>
                    <v-list-tile-sub-title class="text--primary">
                        <i>
                            {{ item.created_at }}
                        </i>
                    </v-list-tile-sub-title>
                    <v-list-tile-sub-title>{{ item.message | short }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                    <v-btn icon ripple>
                        <v-icon color="grey lighten-1">info</v-icon>
                    </v-btn>
                </v-list-tile-action>
            </v-list-tile>
        </v-card-text>
    </v-card>
</template>

<script>
import Form from 'vform'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    sent: {
      type: Array,
      default: []
    }
  },
  scrollToTop: false,

  data: () => ({
    showEmail: false,
    icon: 'mail',
    current: {}
  }),
  computed: {
    items () {
      const data = []
      this.sent.forEach(el => {
        data.push({
          id: el.id,
          user: this.users.find(user => +user.id === +el.to_id),
          message: el.message,
          created_at: el.created_at,
          className: 'grey lighten-1 white--text'
        })
      })
      return data.reverse()
    },
    ...mapGetters({
      users: 'employees/employees'
    })
  },
  filters: {
    short (item) {
      return item.slice(0, 80) + '...'
    }
  },
  methods: {
    ...mapActions({
      remove: 'messages/remove'
    }),
    deleteItem () {
      this.showEmail = false
      this.remove({
        id: this.current.id,
        type: 'sent'
      })

    },
    getName (user) {
      if (!user) return ''
      return user.last_name + ' ' + user.name[0] + '.'
    },
    makeResponse () {
      this.showEmail = false
      this.$emit('goToEditor', {
        user:this.current.user,
        message: this.sent.find(el => +el.id === +this.current.id).message
      })
    },
    watchEmail (item) {
      item.message = this.sent.find(el => +el.id === +item.id).message
      console.log(this.sent.find(el => +el.id === +item.id))
      this.current = item
      this.showEmail = true;
    }
  }
}
</script>

<style scoped lang="scss">
    .email-item {
        margin-bottom: 15px;
        &:hover {
            background-color: rgba(198, 198, 198, 0.26);
        }
    }
</style>
