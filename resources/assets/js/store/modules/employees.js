import axios from 'axios';
import * as types from '../mutation-types';

export const state = {
  employees: [],
  employee: {}
}

export const getters = {
  employees: state => state.employees,
  employee: state => state.employee
}

export const mutations = {
  [types.LOAD] (state, employees) {
    state.employees = employees
  },
  [types.LOAD_ONE] (state, employee) {
    state.employee = employee
  },
  [types.ADD] (state, employees) {
    state.employees.push(employees)
  },
  [types.EDIT] (state, employee) {

    const index = state.employees.findIndex(el => el.id == employee.id)
    
    state.employees.splice(index, 1, employee)
    console.log(state.employees[0], employee)
  },
  [types.REMOVE] (state, employeId) {
    const pos = state.employees.findIndex(el => el.id === employeId)
    if (pos !== -1) state.employees.splice(pos, 1)
  }
}

export const actions = {
  async [types.LOAD] ({ commit }) {
    try {
      const { data } = await axios.get('/api/employees')
      commit('load', data)
    } catch (e) {
      console.error('Не загрузились сотрудники', e)
    }
  },
  async [types.LOAD_ONE] ({ commit }, payload) {
    try {
      const { data } = await axios.get('/api/employees/' + payload)
      commit('loadOne', data)
    } catch (e) {
      console.error('Не загрузился сотрудник', e)
    }
  },
  async [types.ADD] ({ commit }, payload) {
    try {
      const { data } = await axios.post('/api/employees', payload)
      commit('add', data)
    } catch (e) {
      console.error('Не создался сотрудник', e)
    }
  },
  async [types.EDIT] ({ commit }, employee) {
    try {
      const { data } = await axios.put('/api/employees/' + employee.id, employee)
      commit('edit', data)
    } catch (e) {
      console.error('Не изменился сотрудник', e)
    }
  },
  async [types.REMOVE] ({ commit }, employee) {
    try {
      await axios.delete('/api/employees/' + employee)
      commit('remove', employee)
    } catch (e) {
      console.error('Не удалился сотрудник', e)
    }
  }
}
