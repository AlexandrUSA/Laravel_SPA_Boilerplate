import axios from 'axios'

export const state = {
  positions: [],
  position: {}
}

export const getters = {
  positions: state => state.positions,
  position: state => state.position
}

export const mutations = {
  load (state, positions) {
    state.positions = positions
  },
  loadOne (state, position) {
    state.position = position
  },
  add (state, position) {
    state.positions.push(position)
  },
  edit (state, position) {
    const index = state.positions.findIndex(el => el.id === position.id)
    state.positions.splice(index, 1, position)
  },
  remove (state, positionId) {
    const pos = state.positions.findIndex(el => el.id === positionId)
    if (pos !== -1) state.positions.splice(pos, 1)
  }
}

export const actions = {
  async load ({ commit }) {
    try {
      const { data } = await axios.get('/api/positions')
      commit('load', data)
    } catch (e) {
      console.error('Не загрузились должности', e)
    }
  },
  async loadOne ({ commit }, payload) {
    try {
      const { data } = await axios.get('/api/positions/' + payload)
      commit('loadOne', data)
    } catch (e) {
      console.error('Не загрузилась должность', e)
    }
  },
  async add ({ commit }, payload) {
    try {
      const { data } = await axios.post('/api/positions', payload)
      commit('add', data)
    } catch (e) {
      console.error('Не создалась должность', e)
    }
  },
  async edit ({ commit }, position) {
    try {
      const { data } = await axios.put('/api/positions/' + position.id, position)
      commit('edit', data)
    } catch (e) {
      console.error('Не изменилась должность', e)
    }
  },
  async remove ({ commit }, position) {
    try {
      await axios.delete('/api/positions/' + position)
      commit('remove', position)
    } catch (e) {
      console.error('Не удалилась должность', e)
    }
  }
}
