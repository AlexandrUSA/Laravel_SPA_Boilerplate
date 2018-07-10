import { mapActions, mapGetters } from 'vuex'
import Transfers from '~/components/balance/transfers.vue'
import Charges from '~/components/balance/charges.vue'
import Customers from '~/components/balance/customers'
import Editor from '~/components/balance/editor.vue'

export default {
  middleware: ['auth'],
  metaInfo () {
    return { title: this.$t('nav-balance') }
  },
  data () {
    return {
      active: 0,
      tabs: [
        {
          id: 0,
          title: 'Поступления',
          component: 'Charges'
        },
        {
          id: 1,
          title: 'Выплаты',
          component: 'Transfers'
        },
        {
          id: 2,
          title: 'Потребители',
          component: 'Customers'
        },
        {
          id: 3,
          title: 'Операции перевода',
          component: 'Editor'
        }
      ]
    }
  },
  components: { Transfers, Charges, Editor, Customers },
  computed: {
    ...mapGetters({
      account: 'balance/account',
      balance: 'balance/balance',
      charges: 'balance/charges',
      transfers: 'balance/transfers',
      recipients: 'balance/recipients',
    })
  },
  methods: {
    ...mapActions({
      loadAccount: 'balance/loadAccount',
      loadBalance: 'balance/loadBalance',
      loadCharges: 'balance/loadCharges',
      loadTransfers: 'balance/loadTransfers',
      loadRecipients: 'balance/loadRecipients',
      getAll: 'balance/getAll'
    })
  },
  async created () {
    await this.getAll()
  }
}
