<template>
  <v-app :dark="theme">
    <!-- Шапка -->
    <navbar/>
    <!-- Боковая панель навгации -->
    <v-navigation-drawer
      v-if="user"
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      :value="drawer"
      enable-resize-watcher
      fixed
      app
    >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img :src="user.photo_url">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ user.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list dense>
        <v-divider></v-divider>
        <v-list-tile ripple to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('main') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile ripple :to="{name: 'employees'}">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('employees') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- Основной контент -->
    <div class="content-wrapper">
      <child/>
    </div>
    <!-- Футер -->
    <v-footer app>
      
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from '~/components/navbar/Navbar'
import { mapGetters } from 'vuex';
export default {
  name: 'MainLayout',
  data() {
    return {
      miniVariant: false,
      clipped: false,
      fixed: true,
      items: [{
        icon: 'bubble_chart'
      }]
    }
  },
  computed: {
    ...mapGetters({
      'theme': 'theme/dark',
      user: 'auth/user',
      drawer: 'theme/drawer'
    })
  },
  components: {
    Navbar
  }
}
</script>
