import axios from 'axios'
import * as types from '../mutation-types'

const url = '/api/organisation/employees'

export const state = {
  employees: [],
  employee: {},
  archive: [],
  error: null
}

export const getters = {
  employees: state => state.employees,
  employee: state => state.employee,
  archive: state => state.archive,
  error: state => state.error
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
    const index = state.employees.findIndex(el => +el.id === +employee.id)
    state.employees.splice(index, 1, employee)
  },
  [types.REMOVE] (state, employeeID) {
    const pos = state.employees.findIndex(el => el.id === employeeID)
    if (pos !== -1) state.employees.splice(pos, 1)
  },
  setError (state, error) {
    state.error = error
  },
  removeFromArchive (state, employeeID) {
    const pos = state.archive.findIndex(el => +el.id === +employeeID)
    if (pos !== -1) state.archive.splice(pos, 1)
  }
}

export const actions = {
  async [types.LOAD] ({ commit }) {
    try {
      const { data } = await axios.get(url)
      commit('load', data)
    } catch (e) {
      console.error('Не загрузились сотрудники', e)
    }
  },

  async [types.LOAD_ONE] ({ commit }, employeeID) {
    commit('setError', null)
    try {
      const { data } = await axios.get(url + '/' + employeeID)
      commit('loadOne', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },

  async [types.ADD] ({ commit }, payload) {
    commit('setError', null)
    try {
      const { data } = await axios.post(url, payload)
      commit('add', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },

  async [types.EDIT] ({ commit }, employee) {
    commit('setError', null)
    try {
      const { data } = await axios.put(url + '/' + employee.id, employee)
      commit('edit', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },

  async [types.REMOVE] ({ commit }, employeeID) {
    commit('setError', null)
    try {
      await axios.delete(url + '/' + employeeID)
      commit('remove', employeeID)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },

  async getArchive ({ commit }) {
    commit('setError', null)
    try {
      const { data } = await axios.get(url + '/archive')
      commit('load', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },

  async getArchiveOne ({ commit }, employeeID) {
    commit('setError', null)
    console.log('archive')
    try {
      const { data } = await axios.get(url + '/archive/' + employeeID)
      commit('loadOne', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },

  async removeFromArchive ({ commit }, employeeID) {
    commit('setError', null)
    try {
      await axios.delete(url + '/archive/' + employeeID)
      commit('removeFromArchive', employeeID)
    } catch (e) {
      commit('setError', e.response.data)
    }
  }
}
