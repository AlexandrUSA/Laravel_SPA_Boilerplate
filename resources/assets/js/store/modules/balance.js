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
    state.accaunt = accaunt
  },
  [types.LOAD + 'Balance'] (state, balance) {
    state.balance = balance
  },
  [types.LOAD + 'Transfers'] (state, transfers) {
    state.balance = transfers
  },
  [types.LOAD + 'Charges'] (state, chargers) {
    state.balance = chargers
  }
}

export const actions = {
  async [types.LOAD + 'Account'] ({ commit }) {
    console.log('Account')
    try {
      const { data } = await axios.get('/api/finance/account')
      commit(types.LOAD + 'Account', data)
    } catch (e) {
      console.error('Не загрузился аккаунт', e.response)
    }
  },
  async [types.LOAD + 'Balance'] ({ commit }) {
    console.log('balance')
    try {
      const { data } = await axios.get('/api/finance/balance')
      commit(types.LOAD + 'Balance', data)
    } catch (e) {
      console.error('Не загрузились баланс', e.response)
    }
  },
  async [types.LOAD + 'Transfers'] ({ commit }) {
    console.log('Transfers')
    try {
      const { data } = await axios.get('/api/finance/transfers')
      commit(types.LOAD + 'Transfers', data)
    } catch (e) {
      console.error('Не загрузились переводы', e.response)
    }
  },
  async [types.LOAD + 'Charges'] ({ commit }) {
    console.log('Charges')
    try {
      const { data } = await axios.get('/api/finance/charges')
      commit(types.LOAD + 'Charges', data)
    } catch (e) {
      console.error('Не загрузились платежы', e.response)
    }
  }
}
