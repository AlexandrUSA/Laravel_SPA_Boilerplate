import axios from 'axios';
import * as types from '../mutation-types';

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
  [types.REMOVE] (state, departmentId) {
    const pos = state.departments.findIndex(el => el.id === departmentId)
    if (pos !== -1) state.departments.splice(pos, 1)
  }
}

export const actions = {
  async [types.LOAD] ({ commit }) {
    try {
      const { data } = await axios.get('/api/departments')
      commit('load', data)
    } catch (e) {
      console.error('Не загрузились отделы', e)
    }
  },
  async [types.LOAD_ONE] ({ commit }, payload) {
    try {
      const { data } = await axios.get('/api/departments/' + payload)
      commit('loadOne', data)
    } catch (e) {
      console.error('Не загрузился отдел', e)
    }
  },
  async [types.ADD] ({ commit }, payload) {
    try {
      const { data } = await axios.post('/api/departments', payload)
      commit('add', data)
    } catch (e) {
      console.error('Не создался отдел', e)
    }
  },
  async [types.EDIT] ({ commit }, department) {
    try {
      const { data } = await axios.put('/api/departments/' + department.id, department)
      commit('edit', data)
    } catch (e) {
      console.error('Не изменился отдел', e)
    }
  },
  async [types.REMOVE] ({ commit }, department) {
    try {
      await axios.delete('/api/departments/' + department)
      commit('remove', department)
    } catch (e) {
      console.error('Не удалился отдел', e)
    }
  }
}
