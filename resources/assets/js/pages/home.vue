<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm12>
        <v-card dark color="secondary">
          <v-card-text>
            <h2 style="text-align: center;">{{ $t('welcome') }}</h2>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <h3>Задачи</h3>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-card dark color="error" class="expired">
          <v-card-title>Просроченные</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="px-0">2</v-card-text>
          <v-card-actions>
            <v-btn color="error">Подробнее</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card dark color="info" class="todo">
          <v-card-title>Текущие</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="px-0">12</v-card-text>
          <v-card-actions>
            <v-btn color="info">Подробнее</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-card dark color="success" class="finished">
          <v-card-title>Выполненные</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="px-0">3</v-card-text>
          <v-card-actions>
            <v-btn color="success">Подробнее</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    middleware: 'auth',
    metaInfo () {
      return {title: this.$t('home')}
    },
    data () {
      return {
        e2: 3
      }
    },
    computed: {
      color () {
        switch (this.e2) {
          case 0:
            return 'blue-grey'
          case 1:
            return 'teal'
          case 2:
            return 'brown'
          case 3:
            return 'indigo'
        }
      },
      ...mapGetters({
        user: 'auth/user',
        tasks: 'calendar/tasks',
        vouchers: 'vouchers/vouchers',
      })
    },
    methods: mapActions({
      loadTasks: 'calendar/load',
      loadVouchers: 'vouchers/load'
    }),
    created () {
      if (!this.tasks) this.loadTasks()
    }
  }
</script>

<style lang="scss">
  .px-0 {
    font-size: 26px;
  }
</style>
