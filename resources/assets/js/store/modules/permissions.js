import axios from 'axios'
import * as types from '../mutation-types'

const url = '/api/organisation/permissions'

export const state = {
  permissions: [],
  permission: {}
}

export const getters = {
  permissions: state => state.permissions,
  permission: state => state.permission
}

export const mutations = {
  [types.LOAD] (state, permissions) {
    state.permissions = permissions
  },
  [types.LOAD_ONE] (state, permission) {
    state.permission = permission
  },
  [types.ADD] (state, permissions) {
    state.permissions.push(permissions)
  },
  [types.EDIT] (state, permission) {
    const index = state.departments.findIndex(el => el.id === permission.id)
    state.permissions.splice(index, 1, permission)
  },
  [types.REMOVE] (state, permissionID) {
    const index = state.permissions.findIndex(el => el.id === permissionID)
    if (index !== -1) state.permissions.splice(index, 1)
  }
}

export const actions = {
  async [types.LOAD] ({ commit }) {
    try {
      const { data } = await axios.get(url)
      commit('load', data)
    } catch (e) {
      console.error('Не загрузились разрешения', e)
    }
  },
  async [types.ADD] ({ commit }, payload) {
    try {
      const { data } = await axios.post(url, payload)
      commit('add', data)
    } catch (e) {
      console.error('Не создался отдел', e)
    }
  },
  async [types.REMOVE] ({ commit }, permissionID) {
    try {
      await axios.delete(url + '/' + permissionID)
      commit('remove', permissionID)
    } catch (e) {
      console.error('Не удалился отдел', e)
    }
  }
}
