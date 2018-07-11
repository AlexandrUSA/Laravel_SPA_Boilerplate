import { mapActions, mapGetters } from 'vuex'
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
          title: 'Выплаты',
          component: 'Charges'
        },
        {
          id: 2,
          title: 'Получатели',
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
  components: { Charges, Editor, Customers },
  computed: {
    ...mapGetters({
      balance: 'balance/balance',
      charges: 'balance/charges',
    })
  },
  methods: {
    ...mapActions({
      loadBalance: 'balance/loadBalance',
      loadCharges: 'balance/loadCharges',
      getAll: 'balance/getAll'
    })
  },
  async created () {
    await this.getAll()
  }
}
