import axios from 'axios'
import * as types from '../mutation-types'

/**
 * URI для работы с ресурсом
 * @type {string}
 */
const URL = '/api/organisation/departments'

export const state = {
  departments: [],
  department: {}
}

export const getters = {
  departments: state => state.departments,
  department: state => state.department
}

export const mutations = {
  [types.LOAD] (state, departments) {
    state.departments = departments
  },
  [types.LOAD_ONE] (state, department) {
    state.department = department
  },
  [types.ADD] (state, departments) {
    state.departments.push(departments)
  },
  [types.EDIT] (state, department) {
    const index = state.departments.findIndex(el => el.id === department.id)
    state.departments.splice(index, 1, department)
  },
  [types.REMOVE] (state, departmentID) {
    const pos = state.departments.findIndex(el => el.id === departmentID)
    if (pos !== -1) state.departments.splice(pos, 1)
  }
}

export const actions = {
  async [types.LOAD] ({ commit }) {
    try {
      const { data } = await axios.get(URL)
      commit(types.LOAD, data)
    } catch (e) {
      console.error('Не загрузились отделы', e)
    }
  },
  async [types.LOAD_ONE] ({ commit }, departmentID) {
    try {
      const { data } = await axios.get(URL + '/' + departmentID)
      commit(types.LOAD_ONE, data)
    } catch (e) {
      console.error('Не загрузился отдел', e)
    }
  },
  async [types.ADD] ({ commit }, payload) {
    try {
      const { data } = await axios.post(URL, payload)
      commit(types.ADD, data)
    } catch (e) {
      console.error('Не создался отдел', e)
    }
  },
  async [types.EDIT] ({ commit }, department) {
    try {
      const { data } = await axios.put(URL + '/' + department.id, department)
      commit(types.EDIT, data)
    } catch (e) {
      console.error('Не изменился отдел', e)
    }
  },
  async [types.REMOVE] ({ commit }, departmentID) {
    try {
      await axios.delete(URL + '/' + departmentID)
      commit(types.REMOVE, departmentID)
    } catch (e) {
      console.error('Не удалился отдел', e)
    }
  }
}
