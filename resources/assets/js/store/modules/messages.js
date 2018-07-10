import axios from 'axios'
import * as types from '../mutation-types'

/**
 * URI для работы с ресурсом
 * @type {string}
 */
const URL = '/api/email'

export const state = {
  received: [],
  sent: [],
  message: {},
  error: null
}

export const getters = {
  received: state => state.received,
  sent: state => state.sent,
  message: state => state.message,
  error: state => state.error
}

export const mutations = {
  [types.LOAD] (state, messages) {
    state.received = messages.received
    state.sent = messages.sent
  },
  [types.EDIT] (state, message) {
    const index = state.received.findIndex(el => +el.id === +message.id)
    state.received.splice(index, 1, message)
  },
  [types.REMOVE] (state, message) {
    const pos = state[message.type].findIndex(el => +el.id === +message.id)
    if (pos !== -1) state[message.type].splice(pos, 1)
  },
  [types.SET_ERROR] (state, error) {
    state.error = error
  }
}

export const actions = {
  /**
  * Загрузка всех сообщений
  * @param commit
  * @returns {Promise.<void>}
  */
  async [types.LOAD] ({ commit }) {
    try {
      const { data } = await axios.get(URL)
      commit(types.LOAD, data)
    } catch (e) {
      console.error('Не загрузились сообщения', e)
    }
  },
  /**
  * Добавление сообщения
  * @param commit
  * @param message
  * @returns {Promise.<void>}
  */
  async [types.ADD] ({ commit }, message) {
    try {
      const { data } = await axios.post(URL, message)
      commit(types.LOAD, data)
    } catch (e) {
      console.error('Не создался сообщение', e)
    }
  },
  /**
  * Изменение сообщения
  * @param commit
  * @param message
  * @returns {Promise.<void>}
  */
  async [types.EDIT] ({ commit }, message) {
    try {
      const { data } = await axios.put(URL + '/' + message.id, message)
      commit(types.EDIT, data)
    } catch (e) {
      console.error('Не изменился сообщение', e)
    }
  },
  /**
  * Удаление сообщения
  * @param commit
  * @param message
  * @returns {Promise.<void>}
  */
  async [types.REMOVE] ({ commit }, message) {
    try {
      await axios.delete(URL + '/' + message.id)
      commit(types.REMOVE, message)
    } catch (e) {
      console.error('Не удалился сообщение', e)
    }
  }
}
