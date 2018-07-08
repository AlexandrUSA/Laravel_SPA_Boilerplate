import axios from 'axios'
import * as types from '../mutation-types'

export const state = {
  account: {},
  balance: [],
  charges: [],
  transfers: []
}

export const getters = {
  account: state => state.account,
  balance: state => state.balance,
  charges: state => state.charges,
  transfers: state => state.transfers
}

export const mutations = {
  [types.LOAD + 'Account'] (state, accaunt) {
    console.log('Account', accaunt)
    state.accaunt = accaunt
  },
  [types.LOAD + 'Balance'] (state, balance) {
    console.log('Balance', balance.available[0])
    state.balance = balance.available[0]
  },
  [types.LOAD + 'Transfers'] (state, transfers) {
    console.log('Transfers', transfers)
    state.transfers = transfers.data
  },
  [types.LOAD + 'Charges'] (state, chargers) {
    console.log('Charges', chargers)
    state.charges = chargers.data
  }
}

export const actions = {
  async [types.LOAD + 'Account'] ({ commit }) {
    try {
      const { data } = await axios.get('/api/finance/account')
      commit(types.LOAD + 'Account', data)
    } catch (e) {
      console.error('Не загрузился аккаунт', e.response)
    }
  },
  async [types.LOAD + 'Balance'] ({ commit }) {
    try {
      const { data } = await axios.get('/api/finance/balance')
      commit(types.LOAD + 'Balance', data)
    } catch (e) {
      console.error('Не загрузились баланс', e.response)
    }
  },
  async [types.LOAD + 'Transfers'] ({ commit }) {
    try {
      const { data } = await axios.get('/api/finance/transfers')
      commit(types.LOAD + 'Transfers', data)
    } catch (e) {
      console.error('Не загрузились переводы', e.response)
    }
  },
  async [types.LOAD + 'Charges'] ({ commit }) {
    try {
      const { data } = await axios.get('/api/finance/charges')
      commit(types.LOAD + 'Charges', data)
    } catch (e) {
      console.error('Не загрузились платежы', e.response)
    }
  },

  async getAll ({commit}) {
    try {
      const { data } = await axios.get('/api/finance/all')
      commit(types.LOAD + 'Charges', data.charges)
      commit(types.LOAD + 'Transfers', data.transfers)
      commit(types.LOAD + 'Balance', data.balance)
      commit(types.LOAD + 'Account', data.account)
    } catch (e) {
      console.error('Не загрузились платежы', e.response)
    }
  }
}
