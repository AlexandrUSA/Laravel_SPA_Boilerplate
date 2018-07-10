import { mapGetters, mapActions } from 'vuex'

export default {
  middleware: 'auth',
  data: () => ({
    darkMode: null,
    rightMode: null,
    miniVariantMode: null,
    clippedMode: null,
    fixedMode: null
  }),
  computed: {
    ...mapGetters({
      dark: 'theme/dark',
      right: 'theme/right',
      miniVariant: 'theme/miniVariant',
      clipped: 'theme/clipped',
      fixed: 'theme/fixed'
    })
  },
  watch: {
    darkMode (newValue, oldValue) {
      if (oldValue !== null) this.switchTheme()
    },
    rightMode (newValue, oldValue) {
      if (oldValue !== null) this.switchRight()
    },
    miniVariantMode (newValue, oldValue) {
      if (oldValue !== null) this.switchMiniVariant()
    },
    clippedMode (newValue, oldValue) {
      if (oldValue !== null) this.switchClipped()
    },
    fixedMode (newValue, oldValue) {
      if (oldValue !== null) this.switchFixed()
    }
  },
  methods: {
    ...mapActions({
      switchTheme: 'theme/switchTheme',
      switchRight: 'theme/switchRight',
      switchMiniVariant: 'theme/switchMiniVariant',
      switchClipped: 'theme/switchClipped',
      switchFixed: 'theme/switchFixed'
    })
  },
  created () {
    this.darkMode = this.dark
    this.miniVariantMode = this.miniVariant
    this.rightMode = this.right
    this.clippedMode = this.clipped
    this.fixedMode = this.fixed
  }
}
