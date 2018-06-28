import axios from 'axios'

const url = '/api/vouchers'

export const state = {
  vouchers: []
}

export const getters = {
  vouchers: state => state.vouchers
}

export const mutations = {
  load (state, vouchers) {
    state.vouchers = vouchers
  },
  add (state, vouchers) {
    state.vouchers.push(vouchers)
  },
  edit (state, voucher) {
    const index = state.vouchers.findIndex(el => el.id === voucher.id)
    state.vouchers.splice(index, 1, voucher)
  },
  remove (state, voucherID) {
    const pos = state.vouchers.findIndex(el => el.id === voucherID)
    if (pos !== -1) state.vouchers.splice(pos, 1)
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
  }
}
