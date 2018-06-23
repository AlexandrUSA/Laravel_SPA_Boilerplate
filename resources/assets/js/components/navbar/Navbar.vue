<template>
  <v-toolbar app fixed clipped-left>
    <template v-if="user">
      <v-toolbar-side-icon @click="switchDrawer()"></v-toolbar-side-icon>
      <v-btn fab small @click="historyBack()" class="arrow">
        <fa icon="angle-left"/>
      </v-btn>
    </template>
    <v-btn flat :to="{ name: user ? 'home' : 'welcome' }">{{ appName }}</v-btn>
    <locale-dropdown/>
    <v-spacer/>
    <!--  Пользователь -->
    <template v-if="user">
      <v-btn flat>
        <fa icon="sign-out-alt"/>
        {{ $t('logout') }}
      </v-btn>
    </template>
    <!-- Гость -->
    <template v-else>
      <v-btn flat :to="{ name: 'login' }">
        <fa icon="sign-in-alt"/>
        {{ $t('login') }}
      </v-btn>
    </template>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LocaleDropdown from './LocaleDropdown'
import SettingsDropdown from './SettingsDropdown'

export default {
  data: () => ({
    appName: window.config.appName
  }),
  computed: mapGetters({
    user: 'auth/user'
  }),
  components: {
    LocaleDropdown,
    SettingsDropdown
  },
  methods: {
    async logout () {
      // Выйти из учетной записи
      await this.$store.dispatch('auth/logout')
      // Перенаправление на сттраницу авторизации
      this.$router.push({ name: 'login' })
    },
    switchDrawer() {
      this.$emit('switchDrawer')
    },
    historyBack() {
      if(this.user) this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
  .svg-inline--fa {
    margin-right: 5px;
  }
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}

.list {
  background-color: #fff;
}

 nav.toolbar { 
    padding-left: 45px !important;
    padding-right: 45px !important;
    z-index: 4;
  }

  .menu__content {
    min-width: 250px !important;
  }
</style>
