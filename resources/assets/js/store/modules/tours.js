import axios from 'axios'
import * as types from '../mutation-types'

const url = '/api/activity/tours'

export const state = {
  tours: [],
  tour: {},
  error: null
}

export const getters = {
  tours: state => state.tours,
  tour: state => state.tour,
  error: state => state.error
}

export const mutations = {
  load (state, tours) {
    state.tours = tours
  },
  [types.LOAD_ONE] (state, tour) {
    state.tour = tour
  },
  add (state, tours) {
    state.tours.push(tours)
  },
  edit (state, tour) {
    const index = state.tours.findIndex(el => el.id === tour.id)
    state.tours.splice(index, 1, tour)
  },
  remove (state, tourID) {
    const pos = state.tours.findIndex(el => el.id === tourID)
    if (pos !== -1) state.tours.splice(pos, 1)
  },
  setError (state, error) {
    state.error = error
  },
  removeFromArchive (state, tourID) {
    const pos = state.archive.findIndex(el => +el.id === +tourID)
    if (pos !== -1) state.archive.splice(pos, 1)
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
  async [types.LOAD_ONE] ({ commit }, tourID) {
    commit('setError', null)
    try {
      const { data } = await axios.get(url + '/' + tourID)
      commit('loadOne', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },
  /**
  * Добавление нового тура
  * @param commit
  * @param payload
  * @returns {Promise.<void>}
  */
  async add ({ commit }, payload) {
    try {
      const { data } = await axios.post(url, payload)
      commit('add', data)
    } catch (e) {
      console.error('Не создался туры', e)
    }
  },
  /**
  * Изменение тура
  * @param commit
  * @param tour
  * @returns {Promise.<void>}
  */
  async edit ({ commit }, tour) {
    try {
      const { data } = await axios.put(url + '/' + tour.id, tour)
      commit('edit', data)
    } catch (e) {
      console.error('Не изменился тур', e)
    }
  },
  /**
  * Удаление тура
  * @param commit
  * @param tourID
  * @returns {Promise.<void>}
  */
  async remove ({ commit }, tourID) {
    try {
      await axios.delete(url + '/' + tourID)
      commit('remove', tourID)
    } catch (e) {
      console.error('Не удалился тур', e)
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

  async getArchiveOne ({ commit }, tourID) {
    commit('setError', null)
    try {
      const { data } = await axios.get(url + '/archive/' + tourID)
      commit('loadOne', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },

  async removeFromArchive ({ commit }, tourID) {
    commit('setError', null)
    try {
      await axios.delete(url + '/archive/' + tourID)
      commit('remove', tourID)
    } catch (e) {
      commit('setError', e.response.data)
    }
  }
}
