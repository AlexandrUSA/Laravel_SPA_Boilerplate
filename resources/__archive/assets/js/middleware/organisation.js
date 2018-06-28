import store from '~/store'

export default (to, from, next) => {
  if (!store.getters['employees/employees'].length) store.dispatch('employees/load');
  if (!store.getters['departments/departments'].length) store.dispatch('departments/load');
  if (!store.getters['positions/positions'].length) store.dispatch('positions/load');
  next()
}
