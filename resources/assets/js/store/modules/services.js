import axios from 'axios'

const url = '/api/activity/services'

export const state = {
  services: []
}

export const getters = {
  services: state => state.services
}

export const mutations = {
  load (state, services) {
    state.services = services
  },
  add (state, service) {
    state.services.push(service)
  },
  remove (state, serviceID) {
    const pos = state.services.findIndex(el => el.id === serviceID)
    if (pos !== -1) state.services.splice(pos, 1)
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
  * @param service
  * @returns {Promise.<void>}
  */
  async add ({ commit }, service) {
    try {
      const { data } = await axios.post(url, service)
      commit('add', data)
    } catch (e) {
      console.error('Не создался туры', e)
    }
  },
  /**
  * Удаление тура
  * @param commit
  * @param serviceID
  * @returns {Promise.<void>}
  */
  async remove ({ commit }, serviceID) {
    try {
      await axios.delete(url + '/' + serviceID)
      commit('remove', serviceID)
    } catch (e) {
      console.error('Не удалился тур', e)
    }
  }
}
