<template>
  <div id="app">
    <loading ref="loading"/>
    <transition name="page" mode="out-in">
      <component v-if="layout" :is="layout"></component>
    </transition>
  </div>
</template>

<script>
import Loading from './Loading';
import { mapGetters, mapActions } from 'vuex';


// Динамическая загрузка компонентов разметки.
const requireContext = require.context('~/layouts', false, /.*\.vue$/)

const layouts = requireContext.keys()
  .map(file =>
    [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
  )
  .reduce((components, [name, component]) => {
    components[name] = component
    return components
  }, {})

export default {
  el: '#root',

  components: {
    Loading
  },

  data: () => ({
    layout: null,
    defaultLayout: 'default'
  }),
  metaInfo () {
    const { appName } = window.config

    return {
      title: appName,
      titleTemplate: `%s · ${appName}`
    }
  },
  computed: mapGetters({
    token: 'auth/token'
  }),
  mounted () {
    this.$loading = this.$refs.loading;
    if(this.token) {
      console.log('totla loading')
      this.employees();
      this.departments();
      this.positions();
    }
  },
  methods: {
    /**
     * Установка разметки приложения.
     *
     * @param {String} layout
     */
    setLayout (layout) {
      if (!layout || !layouts[layout]) layout = this.defaultLayout;
      this.layout = layouts[layout]
    },
    ...mapActions({
      employees: 'employees/load',
      departments: 'departments/load',
      positions: 'positions/load'
    })
  }
}
</script>
