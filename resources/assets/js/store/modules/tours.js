import axios from 'axios'

export const state = {
	employees: []
}

export const getters = {
	employees: state => state.employees
}

export const mutations = {
  load (state, tours) {
  	state.employees = tours
  },
  add (state, tours) {
      state.employees.push(tours)
	},
	edit (state, tour) {
		const index = state.tours.findIndex(el => el.id === tour.id)
		state.employees.splice(index, 1, tour)
	},
	remove (state, tourId) {
		const pos = state.tours.findIndex(el => el.id === tourId)
		if(pos !== -1) state.employees.splice(pos, 1)
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
      const { data } = await axios.get('/api/tours')
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
      const { data } = await axios.post('/api/tours', payload)
      commit('add', data)
    } catch (e) {
    	console.error('Не создался туры', e)
    }
  },
    /**
     * Изменение тура
     * @param commit
     * @param employee
     * @returns {Promise.<void>}
     */
  async edit ({ commit }, tour) {
    try {
      const { data } = await axios.put('/api/tours/' + tour.id, tour)
      commit('edit', data)
    } catch (e) {
      console.error('Не изменился туры', e)
    }
  },
    /**
     * Удаление тура
     * @param commit
     * @param employee
     * @returns {Promise.<void>}
     */
  async remove ({ commit }, tour) {
    try {
      await axios.delete('/api/tours/' + tour)
      commit('remove', tour)
    } catch (e) {
      console.error('Не удалился тур', e)
    }
  }
}