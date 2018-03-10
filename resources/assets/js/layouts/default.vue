<template>
  <v-app :dark="theme" v-resize="onResize">
    <!-- Шапка -->
    <navbar/>
    <!-- Основной контент -->
    <div class="content-wrapper">
      <child/>
    </div>
    <!-- Футер -->
    <v-footer app>
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
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
      windowSize: {}
    }
  },
  computed: {
    ...mapGetters({
      'theme': 'theme/dark'
    })
  },
  components: {
    Navbar
  },
  methods: {
    onResize () {
      console.log(window.innerWidth)
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    }
  }
}
</script>
