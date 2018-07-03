import store from '~/store'
import axios from 'axios'

export default (to, from, next) => {
  const clients = store.getters['clients/clients'].length
  const tours = store.getters['tours/tours'].length
  const vouchers = store.getters['vouchers/vouchers'].length
  const services = store.getters['services/services'].length
  // Проверка на отсутствие всех данных
  if (!clients && !tours && !vouchers && !services) {
    axios.get('/api/activity/all')
    .then(({ data }) => {
      store.commit('clients/load', data.clients)
      store.commit('tours/load', data.tours)
      store.commit('vouchers/load', data.vouchers)
      store.commit('services/load', data.services)
    })
  }
  next()
}
