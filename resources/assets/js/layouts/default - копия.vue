<template>
  <v-app :dark="theme">
    <!-- Шапка -->
    <navbar @switchDrawer="drawer = !drawer"/>
    <!-- Боковая панель навгации -->
    <sidebar v-if="user" 
    				:drawer="drawer" 
    				:miniVariant="miniVariant"
    				:clipped = "clipped"
    				:user="user" />
    <!-- Основной контент -->
    <div class="content-wrapper">
      <child/>
    </div>
    <!-- Футер -->
    <v-footer app></v-footer>
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
