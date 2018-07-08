import axios from 'axios'

const url = '/api/email'

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
  load (state, messages) {
    state.received = messages.received
    state.sent = messages.sent
  },
  edit (state, message) {
    const index = state.received.findIndex(el => +el.id === +message.id)
    state.received.splice(index, 1, message)
  },
  remove (state, message) {
    const pos = state[message.type].findIndex(el => +el.id === +message.id)
    if (pos !== -1) state[message.type].splice(pos, 1)
  },
  setError (state, error) {
    state.error = error
  }
}

export const actions = {
  /**
  * Загрузка всех туров
  * @param commit
  * @returns {Promise.<void>}
  */
  async load ({ commit }) {
    try {
      const { data } = await axios.get(url)
      commit('load', data)
    } catch (e) {
      console.error('Не загрузились туры', e)
    }
  },
  /**
  * Добавление нового тура
  * @param commit
  * @param message
  * @returns {Promise.<void>}
  */
  async add ({ commit }, message) {
    try {
      const { data } = await axios.post(url, message)
      commit('load', data)
    } catch (e) {
      console.error('Не создался туры', e)
    }
  },
  /**
  * Изменение тура
  * @param commit
  * @param message
  * @returns {Promise.<void>}
  */
  async edit ({ commit }, message) {
    try {
      const { data } = await axios.put(url + '/' + message.id, message)
      commit('edit', data)
    } catch (e) {
      console.error('Не изменился тур', e)
    }
  },
  /**
  * Удаление тура
  * @param commit
  * @param message
  * @returns {Promise.<void>}
  */
  async remove ({ commit }, message) {
    try {
      await axios.delete(url + '/' + message.id)
      commit('remove', message)
    } catch (e) {
      console.error('Не удалился тур', e)
    }
  }
}
