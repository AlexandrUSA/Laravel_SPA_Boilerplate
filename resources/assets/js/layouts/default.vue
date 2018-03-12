<template>
  <v-app :dark="theme">

    <!-- Шапка -->
    <navbar @switchDrawer="drawer = !drawer"/>

    <!-- Сайдбар -->
    <v-navigation-drawer
      v-if="user"
      clipped
      fixed
      v-model="drawer"
      app
    >
    <sidebar :user="user"/>
    </v-navigation-drawer>

    <!-- Контент -->
    <v-content>
      <child/>
    </v-content>
    
    <!-- Футер -->
    <v-footer app fixed></v-footer>
  </v-app>

</template>

<script>
import Navbar from '~/components/navbar/Navbar';
import Sidebar from '~/components/sidebar/Sidebar';
import { mapGetters } from 'vuex';
export default {
  name: 'MainLayout',
  data() {
    return {
      miniVariant: false,
      clipped: false,
      fixed: true,
      drawer: true
    }
  },
  computed: {
    ...mapGetters({
      'theme': 'theme/dark',
      user: 'auth/user'
    })
  },
  components: {
    Navbar,
    Sidebar
  }
}
</script>
