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
            Ответить
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
      received: {
        type: Array,
        default: []
      }
    },
    data: () => ({
      showEmail: false,
      icon: 'mail',
      current: {},
      interval: null
    }),
    computed: {
      items () {
        const data = []
        this.received.forEach(el => {
          data.push({
            id: el.id,
            user: this.users.find(user => +user.id === +el.from_id),
            message: el.message,
            watched: el.watched,
            created_at: el.created_at,
            className: (el.watched) ? 'grey lighten-1 white--text' : 'green lighten-1 white--text'
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
       if (item.length > 80) {
         return item.slice(0, 80) + '...'
       }
       return item
     }
    },
    methods: {
      ...mapActions({
        load: 'messages/load',
        edit: 'messages/edit',
        remove: 'messages/remove'
      }),
      deleteItem () {
          this.showEmail = false
          this.remove({
            id: this.current.id,
            type: 'received'
          })

      },
      getName (user) {
        if (!user) return ''
        return (user) ? user.last_name + ' ' + user.name[0] + '.' : 'Нет данных'
      },
      makeResponse () {
        this.showEmail = false
        this.$emit('goToEditor', { user: this.current.user })
      },
      watchEmail (item) {
        this.current = item
        this.showEmail = true;
        if(!item.watched) {
          item.watched = true;
          this.edit(item);
        }
      }
    },
    created () {
      this.interval = setInterval(this.load, 5000)
    },
    beforeDestroy () {
      clearInterval(this.interval)
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

  .v-card__title {
    justify-content: center;
  }
</style>
