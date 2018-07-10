<template>
  <v-app :dark="dark">

    <!-- Шапка -->
    <navbar @switchDrawer="drawer = !drawer"/>

    <!-- Сайдбар -->
    <v-navigation-drawer
      v-if="user"
      :clipped="clipped"
      :fixed="fixed"
      :miniVariant="miniVariant"
      v-model="drawer"
      app
      :right="right"
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
      drawer: true
    }
  },
  computed: {
    ...mapGetters({
      dark: 'theme/dark',
      right: 'theme/right',
      miniVariant: 'theme/miniVariant',
      clipped: 'theme/clipped',
      fixed: 'theme/fixed',
      user: 'auth/user'
    })
  },
  components: {
    Navbar,
    Sidebar
  }
}
</script>
