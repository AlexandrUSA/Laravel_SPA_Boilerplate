import axios from 'axios'
import * as types from '../mutation-types'

const url = '/api/activity/clients'

export const state = {
  clients: [],
  client: {},
  archive: [],
  error: null
}

export const getters = {
  clients: state => state.clients,
  client: state => state.client,
  archive: state => state.archive,
  error: state => state.error
}

export const mutations = {
  [types.LOAD] (state, clients) {
    state.clients = clients
  },
  [types.LOAD_ONE] (state, client) {
    state.client = client
  },
  [types.ADD] (state, client) {
    console.log(client)
    state.clients.push(client)
  },
  [types.EDIT] (state, client) {
    const index = state.clients.findIndex(el => +el.id === +client.id)
    state.clients.splice(index, 1, client)
  },
  [types.REMOVE] (state, clientID) {
    const pos = state.clients.findIndex(el => el.id === clientID)
    if (pos !== -1) state.clients.splice(pos, 1)
  },
  setError (state, error) {
    state.error = error
  },
  removeFromArchive (state, clientID) {
    const pos = state.archive.findIndex(el => +el.id === +clientID)
    if (pos !== -1) state.archive.splice(pos, 1)
  }
}

export const actions = {
  async [types.LOAD] ({ commit }) {
    commit('setError', null)
    try {
      const { data } = await axios.get(url)
      commit('load', data)
    } catch (e) {
      console.error('Не загрузились сотрудники', e)
    }
  },
  async [types.LOAD_ONE] ({ commit }, clientID) {
    commit('setError', null)
    try {
      const { data } = await axios.get(url + '/' + clientID)
      commit('loadOne', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },
  async [types.ADD] ({ commit }, client) {
    commit('setError', null)
    try {
      const { data } = await axios.post(url, client)
      commit('add', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },
  async [types.EDIT] ({ commit }, client) {
    commit('setError', null)
    try {
      const { data } = await axios.put(url + '/' + client.id, client)
      commit('edit', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },
  async [types.REMOVE] ({ commit }, clientID) {
    commit('setError', null)
    try {
      await axios.delete(url + '/' + clientID)
      commit('remove', clientID)
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

  async getArchiveOne ({ commit }, clientID) {
    commit('setError', null)
    try {
      const { data } = await axios.get(url + '/archive/' + clientID)
      commit('loadOne', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },

  async removeFromArchive ({ commit }, clientID) {
    commit('setError', null)
    try {
      await axios.delete(url + '/archive/' + clientID)
      commit('removeFromArchive', clientID)
    } catch (e) {
      commit('setError', e.response.data)
    }
  }
}
