import store from '~/store'

export default (to, from, next) => {
  const users = store.getters['employees/employees'].length
  if (!users) {
    store.dispatch('employees/load')
  }
  next()
}
