// state
export const state = {
  dark: true,
  right: false,
  miniVariant: false,
  clipped: false,
  fixed: true
}

// getters
export const getters = {
  dark: state => state.dark,
  right: state => state.right,
  miniVariant: state => state.miniVariant,
  clipped: state => state.clipped,
  fixed: state => state.fixed
}

// mutations
export const mutations = {
  switchTheme (state) {
    state.dark = !state.dark
  },

  switchRight (state) {
    state.right = !state.right
  },

  switchMiniVariant (state) {
    state.miniVariant = !state.miniVariant
  },

  switchClipped (state) {
    state.clipped = !state.clipped
  },

  switchFixed (state) {
    state.fixed = !state.fixed
  }
}

// actions
export const actions = {
  switchTheme ({ commit }) {
    commit('switchTheme')
  },
  switchRight ({ commit }) {
    commit('switchRight')
  },
  switchMiniVariant ({ commit }) {
    commit('switchMiniVariant')
  },
  switchClipped ({ commit }) {
    commit('switchClipped')
  },
  switchFixed ({ commit }) {
    commit('switchFixed')
  }
}
