import { mapActions, mapGetters } from 'vuex'

export default {
  middleware: ['auth'],
  metaInfo () {
    return { title: this.$t('nav-balance') }
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      account: 'balance/account',
      balance: 'balance/balance',
      charges: 'balance/charges',
      transfers: 'balance/transfers'
    })
  },
  methods: {
    ...mapActions({
      loadAccount: 'balance/loadAccount',
      loadBalance: 'balance/loadBalance',
      loadCharges: 'balance/loadCharges',
      loadTransfers: 'balance/loadTransfers'
    })
  },
  created () {
    this.loadAccount()
    this.loadBalance()
    this.loadTransfers()
    this.loadCharges()
  }
}
