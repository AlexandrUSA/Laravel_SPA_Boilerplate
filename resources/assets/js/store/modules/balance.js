import axios from 'axios'
import * as types from '../mutation-types'

/**
 * URI для работы с ресурсом
 * @type {string}
 */
const URL = '/api/finance/'

export const state = {
  account: {},
  balance: [],
  charges: [],
  transfers: [],
  customers: []
}

export const getters = {
  account: state => state.account,
  balance: state => state.balance,
  charges: state => state.charges,
  transfers: state => state.transfers,
  customers: state => state.customers,
  recipients: state => state.recipients
}

export const mutations = {
  [types.LOAD + 'Account'] (state, accaunt) {
    state.accaunt = accaunt
  },
  [types.LOAD + 'Balance'] (state, balance) {
    state.balance = balance.available[0]
  },
  [types.LOAD + 'Transfers'] (state, transfers) {
    state.transfers = transfers.data
  },
  [types.LOAD + 'Charges'] (state, chargers) {
    state.charges = chargers.data
  },
  [types.LOAD + 'Customers'] (state, customers) {
    state.customers = customers.data
  },
  [types.LOAD + 'Recipients'] (state, recipients) {
    state.recipients = recipients.data
  }
}

export const actions = {
  async [types.ADD + 'Recipient'] ({ commit }, recipient) {
    try {
      const { data } = await axios.post(URL + 'recipients', recipient)
      commit(types.ADD + 'Recipients', data)
    } catch (e) {
      console.error('Не загрузились потребители', e.response)
    }
  },

  async [types.LOAD + 'Account'] ({ commit }) {
    try {
      const { data } = await axios.get(URL + 'account')
      commit(types.LOAD + 'Account', data)
    } catch (e) {
      console.error('Не загрузился аккаунт', e.response)
    }
  },
  async [types.LOAD + 'Balance'] ({ commit }) {
    try {
      const { data } = await axios.get(URL + 'balance')
      commit(types.LOAD + 'Balance', data)
    } catch (e) {
      console.error('Не загрузились баланс', e.response)
    }
  },
  async [types.LOAD + 'Transfers'] ({ commit }) {
    try {
      const { data } = await axios.get(URL + 'transfers')
      commit(types.LOAD + 'Transfers', data)
    } catch (e) {
      console.error('Не загрузились переводы', e.response)
    }
  },
  async [types.LOAD + 'Charges'] ({ commit }) {
    try {
      const { data } = await axios.get(URL + 'charges')
      commit(types.LOAD + 'Charges', data)
    } catch (e) {
      console.error('Не загрузились платежы', e.response)
    }
  },

  async [types.LOAD + 'Customers'] ({ commit }) {
    try {
      const { data } = await axios.get(URL + 'customers')
      commit(types.LOAD + 'Customers', data)
    } catch (e) {
      console.error('Не загрузились потребители', e.response)
    }
  },

  async [types.LOAD + 'Recipients'] ({ commit }) {
    try {
      const { data } = await axios.get(URL + 'recipients')
      commit(types.LOAD + 'Recipients', data)
    } catch (e) {
      console.error('Не загрузились потребители', e.response)
    }
  },

  async getAll ({commit}) {
    try {
      const { data } = await axios.get(URL + 'all')
      commit(types.LOAD + 'Transfers', data.transfers)
      commit(types.LOAD + 'Balance', data.balance)
      commit(types.LOAD + 'Account', data.account)
      commit(types.LOAD + 'Charges', data.charges)
    } catch (e) {
      console.error('Не загрузились платежы', e.response)
    }
  }
}
