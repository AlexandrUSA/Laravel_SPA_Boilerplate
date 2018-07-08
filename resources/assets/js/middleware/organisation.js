import store from '~/store'
import axios from 'axios'

console.log('org')

export default (to, from, next) => {
  console.log('org missing snth')
  const employees = store.getters['employees/employees'].length
  const departments = store.getters['departments/departments'].length
  const permissions = store.getters['permissions/permissions'].length
  const positions = store.getters['positions/positions'].length
  // Проверка на отсутствие всех данных
  if (!employees || !permissions || !departments || !positions) {
    axios.get('/api/organisation/all')
    .then(({ data }) => {
      store.commit('employees/load', data.employees)
      store.commit('departments/load', data.departments)
      store.commit('permissions/load', data.permissions)
      store.commit('positions/load', data.positions)
    })
  }
  next()
}
