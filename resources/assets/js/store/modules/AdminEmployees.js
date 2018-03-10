import axios from 'axios'

export const state = { employees: [], employee: {} }

export const getters = {
  employees: state => state.employees,
  employee: state => state.employee
}

export const mutations = {
  load (state, employees) {
    state.employees = employees
  },
  loadOne (state, employee) {
    state.employee = employee
  },
  add (state, employees) {
    state.employees.push(employees)
  },
  edit (state, employee) {
    const index = state.employees.findIndex(el => el.id === employee.id)
    state.employees.splice(index, 1, employee)
  },
  remove (state, employeId) {
    const pos = state.employees.findIndex(el => el.id === employeId)
    if (pos !== -1) state.employees.splice(pos, 1)
  }
}

export const actions = {
  async load ({ commit }) {
    try {
      const { data } = await axios.get('/api/employees')
      commit('load', data)
    } catch (e) {
      console.error('Не загрузились сотрудники', e)
    }
  },
  async loadOne ({ commit }, payload) {
    try {
      const { data } = await axios.get('/api/employees/' + payload)
      commit('loadOne', data)
    } catch (e) {
      console.error('Не загрузился сотрудник', e)
    }
  },
  async add ({ commit }, payload) {
    try {
      const { data } = await axios.post('/api/employees', payload)
      commit('add', data)
    } catch (e) {
      console.error('Не создался сотрудник', e)
    }
  },
  async edit ({ commit }, employee) {
    try {
      const { data } = await axios.put('/api/employees/' + employee.id, employee)
      commit('edit', data)
    } catch (e) {
      console.error('Не изменился сотрудник', e)
    }
  },
  async remove ({ commit }, employee) {
    try {
      await axios.delete('/api/employees/' + employee)
      commit('remove', employee)
    } catch (e) {
      console.error('Не удалился сотрудник', e)
    }
  }
}
