<template>
  <div id="locale">
    <v-menu :nudge-width="100">
      <v-btn 
        flat 
        slot="activator"
      >
        <span>{{ user.name }}</span>
        <fa 
          pull="right" 
          icon="caret-down" 
        />
        </v-btn>
        <v-list>
          <v-list-tile :to="{ name: 'settings' }">
            <v-list-tile-avatar>
              <fa icon="cog" fixed-width/>
            </v-list-tile-avatar>
            <v-list-tile-title v-text="$t('settings')"/>
          </v-list-tile>
          <v-list-tile @click.prevent="logout">
            <v-list-tile-avatar>
              <fa icon="sign-out-alt" fixed-width/>
            </v-list-tile-avatar>
            <v-list-tile-title v-text="$t('logout')"/>
          </v-list-tile>
      </v-list>
    </v-menu>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'

export default {
  computed: mapGetters({
    user: 'auth/user'
  }),
  methods: {
    async logout () {
      // Выйти из учетной записи
      await this.$store.dispatch('auth/logout')
      // Перенаправление на страницу авторизации
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}

.profile-avatar {
  display: inline-block;
  vertical-align: middle;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin: -.375rem 4px;
}
</style>
