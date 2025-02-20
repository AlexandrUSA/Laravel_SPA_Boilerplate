import 'vuetify/dist/vuetify.min.css' // Не забудь проверить css-loader

import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
Vue.use(Vuetify, {
  theme: {	// Цветовая схема для всех компонентов приложения
    primary: '#1976D2', secondary: '#424242', accent: '#82B1FF', error: '#FF5252', info: '#2196F3', success: '#4CAF50', warning: '#FFC107'
  }
})
