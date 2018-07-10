import axios from 'axios'
import * as types from '../mutation-types'

/**
 * URI для работы с ресурсом
 * @type {string}
 */
const URL = '/api/activity/vouchers'

export const state = {
  vouchers: [],
  voucher: {},
  error: null
}

export const getters = {
  vouchers: state => state.vouchers,
  voucher: state => state.voucher,
  error: state => state.error
}

export const mutations = {
  [types.LOAD] (state, vouchers) {
    state.vouchers = vouchers
  },
  [types.ADD] (state, voucher) {
    state.vouchers.push(voucher)
  },
  [types.EDIT] (state, voucher) {
    const index = state.vouchers.findIndex(el => el.id === voucher.id)
    state.vouchers.splice(index, 1, voucher)
  },
  [types.REMOVE] (state, voucherID) {
    const pos = state.vouchers.findIndex(el => el.id === voucherID)
    if (pos !== -1) state.vouchers.splice(pos, 1)
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
  * Загрузка всех записей
  * @param commit
  * @returns {Promise.<void>}
  */
  async [types.LOAD] ({ commit }) {
    try {
      const { data } = await axios.get(URL)
      commit(types.LOAD, data)
    } catch (e) {
      console.error('Не загрузились путевки', e)
    }
  },

  /**
  * Добавление новой записи
  * @param commit
  * @param voucher
  * @returns {Promise.<void>}
  */
  async [types.ADD] ({ commit }, voucher) {
    commit(types.SET_ERROR, null)
    try {
      const { data } = await axios.post(URL, voucher)
      commit(types.ADD, data)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
      console.error('Не создался путевки', e)
    }
  },

  /**
  * Изменение записи
  * @param commit
  * @param voucher
  * @returns {Promise.<void>}
  */
  async [types.EDIT] ({ commit }, voucher) {
    commit(types.SET_ERROR, null)
    try {
      const { data } = await axios.put(URL + '/' + voucher.id, voucher)
      commit(types.EDIT, data)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
      console.error('Не изменился путевка', e)
    }
  },

  /**
  * Удаление записи
  * @param commit
  * @param voucherID
  * @returns {Promise.<void>}
  */
  async [types.REMOVE] ({ commit }, voucherID) {
    commit(types.SET_ERROR, null)
    try {
      await axios.delete(URL + '/' + voucherID)
      commit(types.REMOVE, voucherID)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
      console.error('Не удалился путевка', e)
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
  async [types.GET_ARCHIVE_ONE] ({ commit }, voucherID) {
    commit(types.SET_ERROR, null)
    try {
      const { data } = await axios.get(URL + '/archive/' + voucherID)
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
  async [types.REMOVE_FROM_ARCHIVE] ({ commit }, voucherID) {
    commit(types.SET_ERROR, null)
    try {
      await axios.delete(URL + '/archive/' + voucherID)
      commit(types.REMOVE_FROM_ARCHIVE, voucherID)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
    }
  }
}
