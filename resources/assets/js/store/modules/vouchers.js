import axios from 'axios'

const url = '/api/activity/vouchers'

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
  load (state, vouchers) {
    state.vouchers = vouchers
  },
  add (state, voucher) {
    state.vouchers.push(voucher)
  },
  edit (state, voucher) {
    const index = state.vouchers.findIndex(el => el.id === voucher.id)
    state.vouchers.splice(index, 1, voucher)
  },
  remove (state, voucherID) {
    const pos = state.vouchers.findIndex(el => el.id === voucherID)
    if (pos !== -1) state.vouchers.splice(pos, 1)
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
  /**
  * Добавление нового тура
  * @param commit
  * @param voucher
  * @returns {Promise.<void>}
  */
  async add ({ commit }, voucher) {
    try {
      const { data } = await axios.post(url, voucher)
      commit('add', data)
    } catch (e) {
      console.error('Не создался туры', e)
    }
  },
  /**
  * Изменение тура
  * @param commit
  * @param voucher
  * @returns {Promise.<void>}
  */
  async edit ({ commit }, voucher) {
    try {
      const { data } = await axios.put(url + '/' + voucher.id, voucher)
      commit('edit', data)
    } catch (e) {
      console.error('Не изменился тур', e)
    }
  },
  /**
  * Удаление тура
  * @param commit
  * @param voucherID
  * @returns {Promise.<void>}
  */
  async remove ({ commit }, voucherID) {
    try {
      await axios.delete(url + '/' + voucherID)
      commit('remove', voucherID)
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

  async getArchiveOne ({ commit }, voucherID) {
    commit('setError', null)
    try {
      const { data } = await axios.get(url + '/archive/' + voucherID)
      commit('loadOne', data)
    } catch (e) {
      commit('setError', e.response.data)
    }
  },

  async removeFromArchive ({ commit }, voucherID) {
    commit('setError', null)
    try {
      await axios.delete(url + '/archive/' + voucherID)
      commit('removeFromArchive', voucherID)
    } catch (e) {
      commit('setError', e.response.data)
    }
  }
}
