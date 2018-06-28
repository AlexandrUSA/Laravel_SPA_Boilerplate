import axios from 'axios'

const url = '/api/tours'

export const state = {
  tours: []
}

export const getters = {
  tours: state => state.tours
}

export const mutations = {
  load (state, tours) {
    state.tours = tours
  },
  add (state, tours) {
    state.tours.push(tours)
  },
  edit (state, tour) {
    const index = state.tours.findIndex(el => el.id === tour.id)
    state.tours.splice(index, 1, tour)
  },
  remove (state, tourID) {
    const pos = state.tours.findIndex(el => el.id === tourID)
    if (pos !== -1) state.tours.splice(pos, 1)
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
  * @param payload
  * @returns {Promise.<void>}
  */
  async add ({ commit }, payload) {
    try {
      const { data } = await axios.post(url, payload)
      commit('add', data)
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
  async edit ({ commit }, tour) {
    try {
      const { data } = await axios.put(url + '/' + tour.id, tour)
      commit('edit', data)
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
  async remove ({ commit }, tourID) {
    try {
      await axios.delete(url + '/' + tourID)
      commit('remove', tourID)
    } catch (e) {
      console.error('Не удалился тур', e)
    }
  }
}
