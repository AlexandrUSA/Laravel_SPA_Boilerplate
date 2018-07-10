import axios from 'axios'
import * as types from '../mutation-types'

/**
 * URI для работы с ресурсом
 * @type {string}
 */
const URL = '/api/organisation/employees'

export const state = {
  employees: [],
  employee: {},
  archive: [],
  error: null
}

export const getters = {
  employees: state => state.employees,
  employee: state => state.employee,
  archive: state => state.archive,
  error: state => state.error
}

export const mutations = {
  [types.LOAD] (state, employees) {
    state.employees = employees
  },
  [types.LOAD_ONE] (state, employee) {
    state.employee = employee
  },
  [types.ADD] (state, employees) {
    state.employees.push(employees)
  },
  [types.EDIT] (state, employee) {
    const index = state.employees.findIndex(el => +el.id === +employee.id)
    state.employees.splice(index, 1, employee)
  },
  [types.REMOVE] (state, employeeID) {
    const pos = state.employees.findIndex(el => el.id === employeeID)
    if (pos !== -1) state.employees.splice(pos, 1)
  },
  [types.SET_ERROR] (state, error) {
    state.error = error
  },
  [types.REMOVE_FROM_ARCHIVE] (state, employeeID) {
    const pos = state.archive.findIndex(el => +el.id === +employeeID)
    if (pos !== -1) state.archive.splice(pos, 1)
  }
}

export const actions = {
  /**
   * Загрузка сотрудников
   * @param commit
   * @returns {Promise.<void>}
   */
  async [types.LOAD] ({ commit }) {
    try {
      const { data } = await axios.get(URL)
      commit(types.LOAD, data)
    } catch (e) {
      console.error('Не загрузились сотрудники', e)
    }
  },

  /**
   * Загрузка сотрудника
   * @param commit
   * @param employeeID
   * @returns {Promise.<void>}
   */
  async [types.LOAD_ONE] ({ commit }, employeeID) {
    commit(types.SET_ERROR, null)
    try {
      const { data } = await axios.get(URL + '/' + employeeID)
      commit(types.LOAD_ONE, data)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
      console.error('Не загрузился сотрудник', e)
    }
  },

  /**
   * Добавление сотрудника
   * @param commit
   * @param payload
   * @returns {Promise.<void>}
   */
  async [types.ADD] ({ commit }, payload) {
    commit(types.SET_ERROR, null)
    try {
      const { data } = await axios.post(URL, payload)
      commit(types.ADD, data)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
      console.error('Не создался сотрудник', e)
    }
  },

  /**
   * Изменение сотрудника
   * @param commit
   * @param employee
   * @returns {Promise.<void>}
   */
  async [types.EDIT] ({ commit }, employee) {
    commit(types.SET_ERROR, null)
    try {
      const { data } = await axios.put(URL + '/' + employee.id, employee)
      commit(types.EDIT, data)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
      console.error('Не изменился сотрудник', e)
    }
  },

  /**
   * Удаление сотрудника
   * @param commit
   * @param employeeID
   * @returns {Promise.<void>}
   */
  async [types.REMOVE] ({ commit }, employeeID) {
    commit(types.SET_ERROR, null)
    try {
      await axios.delete(URL + '/' + employeeID)
      commit(types.REMOVE, employeeID)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
      console.error('Не удалился сотрудник', e)
    }
  },

  /**
   * Загрузка архива сотрудников
   * @param commit
   * @returns {Promise.<void>}
   */
  async [types.GET_ARCHIVE] ({ commit }) {
    commit(types.SET_ERROR, null)
    try {
      const { data } = await axios.get(URL + '/archive')
      commit(types.LOAD, data)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
      console.error('Не загрузились сотрудники', e)
    }
  },

  /**
   * Загрузка одного сотрудника из архива
   * @param commit
   * @param employeeID
   * @returns {Promise.<void>}
   */
  async [types.GET_ARCHIVE_ONE] ({ commit }, employeeID) {
    commit(types.SET_ERROR, null)
    console.log('archive')
    try {
      const { data } = await axios.get(URL + '/archive/' + employeeID)
      commit(types.LOAD_ONE, data)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
      console.error('Не загрузился сотрудник', e)
    }
  },

  /**
   * Удаление сотрудника из архива
   * @param commit
   * @param employeeID
   * @returns {Promise.<void>}
   */
  async [types.REMOVE_FROM_ARCHIVE] ({ commit }, employeeID) {
    commit(types.SET_ERROR, null)
    try {
      await axios.delete(URL + '/archive/' + employeeID)
      commit(types.REMOVE_FROM_ARCHIVE, employeeID)
    } catch (e) {
      commit(types.SET_ERROR, e.response.data)
      console.error('Не удалился сотрудник', e)
    }
  }
}
