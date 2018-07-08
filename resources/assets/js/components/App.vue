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
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

// Динамическая загрузка компонентов разметки.
const requireContext = require.context('~/layouts', false, /.*\.vue$/)

const layouts = requireContext.keys()
  .map(file =>
    [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
  )
  .reduce((components, [name, component]) => {
    components[name] = component;
    return components
  }, {});

export default {
  el: '#root',

  components: {
    Loading
  },

  data: () => ({
    layout: null,
    defaultLayout: 'default'
  }),
  computed: mapGetters({
    logged: 'auth/token'
  }),
  metaInfo () {
    const { appName } = window.config;

    return {
      title: appName,
      titleTemplate: `%s · ${appName}`
    }
  },
  mounted () {
    this.$loading = this.$refs.loading;

    const echo = new Echo({
      broadcaster: `pusher`,
      key: `58095af5367d8a85356a`,
      cluster: `eu`,
      encrypted: true
    })

    echo.private(`permission-chanel`).listen(`PermissionChanged`, (e) => {
      console.log(e)
    })
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
    }
  }
}
</script>
