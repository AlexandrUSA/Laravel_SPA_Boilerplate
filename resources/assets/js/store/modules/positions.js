import axios from 'axios'

const url = '/api/organisation/roles'

export const state = {
  positions: [],
  position: {}
};

export const getters = {
  positions: state => state.positions,
  position: state => state.position
};

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
    const index = state.positions.findIndex(el => el.id === position.id);
    state.positions.splice(index, 1, position)
  },
  remove (state, positionID) {
    const pos = state.positions.findIndex(el => el.id === positionID);
    if (pos !== -1) state.positions.splice(pos, 1)
  }
};

export const actions = {
  async load ({ commit }) {
    try {
      const { data } = await axios.get(url);
      commit('load', data)
    } catch (e) {
      console.error('Не загрузились должности', e)
    }
  },
  async loadOne ({ commit }, positionID) {
    try {
      const { data } = await axios.get(url + '/' + positionID);
      commit('loadOne', data)
    } catch (e) {
      console.error('Не загрузилась должность', e)
    }
  },
  async add ({ commit }, position) {
    try {
      const { data } = await axios.post(url, position);
      commit('add', data)
    } catch (e) {
      console.error('Не создалась должность', e)
    }
  },
  async edit ({ commit }, position) {
    try {
      const { data } = await axios.put(url + '/' + position.id, position);
      commit('edit', data)
    } catch (e) {
      console.error('Не изменилась должность', e)
    }
  },
  async remove ({ commit }, positionID) {
    try {
      await axios.delete(url + '/' + positionID)
      commit('remove', positionID)
    } catch (e) {
      console.error('Не удалилась должность', e.response.data)
    }
  }
};
