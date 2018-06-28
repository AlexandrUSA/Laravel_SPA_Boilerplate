import axios from 'axios'
import * as types from '../mutation-types'

const url = '/api/clients'

export const state = {
  clients: [],
  client: {},
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
  [types.LOAD] (state, clients) {
    state.employees = clients
  },
  [types.LOAD_ONE] (state, client) {
    state.employee = client
  },
  [types.ADD] (state, clients) {
    state.employees.push(clients)
  },
  [types.EDIT] (state, client) {
    const index = state.clients.findIndex(el => +el.id === +client.id)
    state.clients.splice(index, 1, client)
  },
  [types.REMOVE] (state, clientId) {
    const pos = state.clients.findIndex(el => el.id === clientId)
    if (pos !== -1) state.clients.splice(pos, 1)
  },
  setError (state, error) {
    state.error = error
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
  async [types.LOAD_ONE] ({ commit }, clientID) {
    console.log('current')
    try {
      const { data } = await axios.get(url + '/' + clientID)
      commit('loadOne', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },
  async [types.ADD] ({ commit }, client) {
    try {
      const { data } = await axios.post(url, client)
      commit('add', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },
  async [types.EDIT] ({ commit }, client) {
    try {
      const { data } = await axios.put(url + '/' + client.id, client)
      commit('edit', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },
  async [types.REMOVE] ({ commit }, clientID) {
    try {
      await axios.delete(url + '/' + clientID)
      commit('remove', clientID)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },

  async getArchive ({ commit }) {
    try {
      const { data } = await axios.get(url + '/archive')
      commit('load', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },

  async getArchiveOne ({ commit }, clientID) {
    console.log('archive')
    try {
      const { data } = await axios.get(url + '/archive/' + clientID)
      commit('loadOne', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },

  async removeFromArchive ({ commit }, clientID) {
    try {
      await axios.delete(url + '/archive/' + clientID)
      commit('removeFromArchive', clientID)
    } catch (e) {
      commit('setError', e.response.data)
    }
  }
}
