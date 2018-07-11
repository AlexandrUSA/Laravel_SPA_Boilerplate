import axios from 'axios'
import * as types from '../mutation-types'

/**
 * URI для работы с ресурсом
 * @type {string}
 */
const URL = '/api/activity/clients'

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
  [types.SET_ERROR] (state, error) {
    state.error = error
  },
  [types.REMOVE_FROM_ARCHIVE] (state, clientID) {
    const pos = state.archive.findIndex(el => +el.id === +clientID)
    if (pos !== -1) state.archive.splice(pos, 1)
  }
}

export const actions = {
  async [types.LOAD] ({ commit }) {
    commit(types.SET_ERROR, null)
    try {
      const { data } = await axios.get(URL)
      commit(types.LOAD, data)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
    }
  },
  async [types.LOAD_ONE] ({ commit }, clientID) {
    commit(types.SET_ERROR, null)
    try {
      const { data } = await axios.get(URL + '/' + clientID)
      commit(types.LOAD_ONE, data)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
    }
  },
  async [types.ADD] ({ commit }, client) {
    commit(types.SET_ERROR, null)
    try {
      const { data } = await axios.post(URL, client)
      commit(types.ADD, data)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
    }
  },
  async [types.EDIT] ({ commit }, client) {
    commit(types.SET_ERROR, null)
    try {
      const { data } = await axios.put(URL + '/' + client.id, client)
      commit(types.EDIT, data)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
    }
  },
  async [types.REMOVE] ({ commit }, clientID) {
    commit(types.SET_ERROR, null)
    try {
      await axios.delete(URL + '/' + clientID)
      commit(types.REMOVE, clientID)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
    }
  },

  async [types.GET_ARCHIVE] ({ commit }) {
    commit(types.SET_ERROR, null)
    try {
      const { data } = await axios.get(URL + '/archive')
      commit(types.LOAD, data)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
    }
  },

  async [types.GET_ARCHIVE_ONE] ({ commit }, clientID) {
    commit(types.SET_ERROR, null)
    try {
      const { data } = await axios.get(URL + '/archive/' + clientID)
      commit(types.LOAD_ONE, data)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
    }
  },

  async [types.REMOVE_FROM_ARCHIVE] ({ commit }, clientID) {
    commit(types.SET_ERROR, null)
    try {
      await axios.delete(URL + '/archive/' + clientID)
      commit(types.REMOVE_FROM_ARCHIVE, clientID)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
    }
  }
}
