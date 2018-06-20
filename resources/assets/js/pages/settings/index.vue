<template>
    <v-tabs
      dark
      slider-color="yellow"
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab.id"
        ripple
      >
        <fa :icon="tab.icon" />
        {{ tab.name }}
      </v-tab>
      <v-tab-item
        v-for="tab in tabs"
        :key="tab.id"
      >
        <v-card flat>
          <component :is="tab.component"></component> 
        </v-card>
      </v-tab-item>
    </v-tabs>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import profile from '../../components/settings/profile';
import password from '../../components/settings/password';

export default {
  middleware: 'auth',
  components: {
    'settings-password': password,
    'settings-profile': profile
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      theme: 'theme/dark'
    }),
    tabs () {
      return [
        {
          id: 0,
          icon: 'user',
          name: this.$t('profile'),
          component: 'settings-profile'
        },
        {
          id: 1,
          icon: 'lock',
          name: this.$t('password'),
          component: 'settings-password'
        }
      ]
    },
    image() {
      return (this.user) ? this.user.photo_url : false;
    }
  },
  created() {
    this.dark = this.theme;
  },
  watch: {
    dark() {
      this.switchTheme(this.dark)
    }
  },
  methods: mapActions({
    switchTheme: 'theme/switchTheme'
  })
}
</script>

<style scoped>

.card {
  padding: 30px;
}

.svg-inline--fa {
  margin-right: 15px;
}

.tabs {
  margin: 30px;
}
</style>
