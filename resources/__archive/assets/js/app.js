import Vue from 'vue'
import Vuetify from 'vuetify'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/vue-i18n'

import App from '~/components/App'

import '~/plugins'
import '~/components'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  store,
  router,
  ...App
})
