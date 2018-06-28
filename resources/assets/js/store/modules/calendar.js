import axios from 'axios'
import * as types from '../mutation-types'

const url = '/api/tasks'

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
      const { data } = await axios.get(url)
      commit('load', data)
    } catch (e) {
      console.error('Не загрузились отделы', e)
    }
  },
  async [types.LOAD_ONE] ({ commit }, payload) {
    try {
      const { data } = await axios.get(url + '/' + payload)
      commit('loadOne', data)
    } catch (e) {
      console.error('Не загрузился отдел', e)
    }
  },
  async [types.ADD] ({ commit }, payload) {
    try {
      const { data } = await axios.post(url, payload)
      commit('add', data)
    } catch (e) {
      console.error('Не создался отдел', e)
    }
  },
  async [types.EDIT] ({ commit }, task) {
    try {
      const { data } = await axios.put(url + '/' + task.id, task)
      commit('edit', data)
    } catch (e) {
      console.error('Не изменился отдел', e)
    }
  },
  async [types.REMOVE] ({ commit }, taskID) {
    try {
      await axios.delete(url + '/' + taskID)
      commit('remove', taskID)
    } catch (e) {
      console.error('Не удалилось задание', e)
    }
  }
}
