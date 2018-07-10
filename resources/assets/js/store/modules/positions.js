import axios from 'axios'
import * as types from '../mutation-types'

/**
 * URI для работы с ресурсом
 * @type {string}
 */
const URL = '/api/organisation/roles'

export const state = {
  positions: [],
  position: {}
}

export const getters = {
  positions: state => state.positions,
  position: state => state.position
};

export const mutations = {
  [types.LOAD] (state, positions) {
    state.positions = positions
  },
  [types.LOAD_ONE] (state, position) {
    state.position = position
  },
  [types.ADD] (state, position) {
    state.positions.push(position)
  },
  [types.EDIT] (state, position) {
    const index = state.positions.findIndex(el => el.id === position.id);
    state.positions.splice(index, 1, position)
  },
  [types.REMOVE] (state, positionID) {
    const pos = state.positions.findIndex(el => el.id === positionID);
    if (pos !== -1) state.positions.splice(pos, 1)
  }
};

export const actions = {
  async [types.LOAD] ({ commit }) {
    try {
      const { data } = await axios.get(URL);
      commit(types.LOAD, data)
    } catch (e) {
      console.error('Не загрузились должности', e)
    }
  },
  /**
   * Загрузка записи
   * @param commit
   * @param positionID
   * @returns {Promise.<void>}
   */
  async [types.LOAD_ONE] ({ commit }, positionID) {
    try {
      const { data } = await axios.get(URL + '/' + positionID);
      commit(types.LOAD_ONE, data)
    } catch (e) {
      console.error('Не загрузилась должность', e)
    }
  },

  /**
   * Добавление новой записи
   * @param commit
   * @param position
   * @returns {Promise.<void>}
   */
  async [types.ADD] ({ commit }, position) {
    try {
      const { data } = await axios.post(URL, position)
      commit(types.ADD, data)
    } catch (e) {
      console.error('Не создалась должность', e)
    }
  },

  /**
   * Изменить запись
   * @param commit
   * @param position
   * @returns {Promise.<void>}
   */
  async [types.EDIT] ({ commit }, position) {
    try {
      const { data } = await axios.put(URL + '/' + position.id, position)
      commit(types.EDIT, data)
    } catch (e) {
      console.error('Не изменилась должность', e)
    }
  },

  /**
   * Удаление записи из архива
   * @param commit
   * @param positionID
   * @returns {Promise.<void>}
   */
  async [types.REMOVE] ({ commit }, positionID) {
    try {
      await axios.delete(URL + '/' + positionID)
      commit(types.REMOVE, positionID)
    } catch (e) {
      console.error('Не удалилась должность', e.response.data)
    }
  }
};
