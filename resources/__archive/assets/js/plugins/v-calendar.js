import Vue from 'vue'
import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'

import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {
  locale: 'ru',
  color: '#424242'
})
Vue.use(VCalendar, {
  firstDayOfWeek: 2  // Monday
})
