import axios from 'axios'
import * as types from '../mutation-types'

/**
 * URI для работы с ресурсом
 * @type {string}
 */
const URL = '/api/tasks'

export const state = {
  tasks: [],
  task: {}
}

export const getters = {
  tasks: state => state.tasks,
  task: state => state.task
}

export const mutations = {
  [types.LOAD] (state, tasks) {
    state.tasks = tasks
  },
  [types.LOAD_ONE] (state, task) {
    state.task = task
  },
  [types.ADD] (state, task) {
    state.tasks.push(task)
  },
  [types.EDIT] (state, task) {
    const index = state.tasks.findIndex(el => el.id === task.id)
    state.tasks.splice(index, 1, task)
  },
  [types.REMOVE] (state, taskId) {
    const pos = state.tasks.findIndex(el => el.id === taskId)
    if (pos !== -1) state.tasks.splice(pos, 1)
  }
}

export const actions = {
  async [types.LOAD] ({ commit }) {
    try {
      const { data } = await axios.get(URL)
      commit(types.LOAD, data)
    } catch (e) {
      console.error('Не загрузились задание', e)
    }
  },
  async [types.LOAD_ONE] ({ commit }, payload) {
    try {
      const { data } = await axios.get(URL + '/' + payload)
      commit(types.LOAD_ONE, data)
    } catch (e) {
      console.error('Не загрузился задание', e)
    }
  },
  async [types.ADD] ({ commit }, payload) {
    try {
      const { data } = await axios.post(URL, payload)
      commit(types.ADD, data)
    } catch (e) {
      console.error('Не создался задание', e)
    }
  },
  async [types.EDIT] ({ commit }, task) {
    try {
      const { data } = await axios.put(URL + '/' + task.id, task)
      commit(types.EDIT, data)
    } catch (e) {
      console.error('Не изменился задание', e)
    }
  },
  async [types.REMOVE] ({ commit }, taskID) {
    try {
      await axios.delete(URL + '/' + taskID)
      commit(types.REMOVE, taskID)
    } catch (e) {
      console.error('Не удалилось задание', e)
    }
  }
}
