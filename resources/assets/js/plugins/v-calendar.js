import Vue from 'vue'
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {
  locale: 'ru',
  color: '#424242',
  className: 'selected-day',
  customClass: 'my-class'
})
