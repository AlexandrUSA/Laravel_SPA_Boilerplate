import axios from 'axios'
import * as types from '../mutation-types'

/**
 * URI для работы с ресурсом
 * @type {string}
 */
const URL = '/api/activity/tours'

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
  [types.LOAD] (state, tours) {
    state.tours = tours
  },
  [types.LOAD_ONE] (state, tour) {
    state.tour = tour
  },
  [types.ADD] (state, tours) {
    state.tours.push(tours)
  },
  [types.EDIT] (state, tour) {
    const index = state.tours.findIndex(el => el.id === tour.id)
    state.tours.splice(index, 1, tour)
  },
  [types.REMOVE] (state, tourID) {
    const pos = state.tours.findIndex(el => el.id === tourID)
    if (pos !== -1) state.tours.splice(pos, 1)
  },
  [types.SET_ERROR] (state, error) {
    state.error = error
  },
  [types.REMOVE_FROM_ARCHIVE] (state, tourID) {
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
  async [types.LOAD] ({ commit }) {
    try {
      const { data } = await axios.get(URL)
      commit(types.LOAD, data)
    } catch (e) {
      console.error('Не загрузились туры', e)
    }
  },

  /**
   * Загрузка тура
   * @param commit
   * @param tourID
   * @returns {Promise.<void>}
   */
  async [types.LOAD_ONE] ({ commit }, tourID) {
    commit(types.SET_ERROR, null)
    try {
      const { data } = await axios.get(URL + '/' + tourID)
      commit(types.LOAD_ONE, data)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
    }
  },

  /**
  * Добавление нового тура
  * @param commit
  * @param payload
  * @returns {Promise.<void>}
  */
  async [types.ADD] ({ commit }, payload) {
    try {
      const { data } = await axios.post(URL, payload)
      commit(types.ADD, data)
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
  async [types.EDIT] ({ commit }, tour) {
    try {
      const { data } = await axios.put(URL + '/' + tour.id, tour)
      commit(types.EDIT, data)
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
  async [types.REMOVE] ({ commit }, tourID) {
    try {
      await axios.delete(URL + '/' + tourID)
      commit(types.REMOVE, tourID)
    } catch (e) {
      console.error('Не удалился тур', e)
    }
  },

  /**
   * Получить записи архива
   * @param commit
   * @returns {Promise.<void>}
   */
  async [types.GET_ARCHIVE] ({ commit }) {
    commit(types.SET_ERROR, null)
    try {
      const { data } = await axios.get(URL + '/archive')
      commit(types.LOAD, data)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
    }
  },

  /**
   * Получить запись с архива
   * @param commit
   * @param voucherID
   * @returns {Promise.<void>}
   */
  async [types.GET_ARCHIVE_ONE] ({ commit }, tourID) {
    commit(types.SET_ERROR, null)
    try {
      const { data } = await axios.get(URL + '/archive/' + tourID)
      commit(types.LOAD_ONE, data)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
    }
  },

  /**
   * Удаление записи из архива
   * @param commit
   * @param voucherID
   * @returns {Promise.<void>}
   */
  async [types.REMOVE_FROM_ARCHIVE] ({ commit }, tourID) {
    commit(types.SET_ERROR, null)
    try {
      await axios.delete(URL + '/archive/' + tourID)
      commit(types.REMOVE, tourID)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
    }
  }
}
