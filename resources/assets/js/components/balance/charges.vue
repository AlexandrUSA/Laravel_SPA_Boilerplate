<template>
  <v-card flat>
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card-title>
      <h3>Ваши переводы</h3>
    </v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        :loading="loading"
        :no-results-text="$t('no_match_found')"
        :rows-per-page-text="$t('strings')"
        class="elevation-1"
      >
        <v-progress-linear slot="progress" indeterminate></v-progress-linear>
        <template slot="items" slot-scope="props">
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.date }}</td>
          <td>{{ props.item.amount }}</td>
          <td>{{ props.item.dest }}</td>
          <td>{{ props.item.status.toUpperCase() }}</td>
        </template>
        <template slot="no-data">
          <v-alert :value="true" color="red" icon="warning">
            Нет данных :(
          </v-alert>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import moment from '~/plugins/moment'

  export default {
    data: () => ({
      dialog: false,
      search: '',
      current: {}
    }),
    computed: {
      items () {
        const data = []
        this.charges.forEach(el => {
          data.push({
            id: el.id,
            date: new Date(el.created * 1000).toLocaleString(),
            amount: el.amount / 100 + ' ' + el.currency.toUpperCase(),
            dest: this._getCustomer(el),
            status: el.status
          })
        })
        return data
      },
      headers () {
        return [
          {
            text: 'Код платежа',
            value: 'id'
          },
          {
            text: 'Дата',
            value: 'date'
          },
          {
            text: 'Сумма',
            value: 'amount'
          },
          {
            text: 'Получатель',
            value: 'dest'
          },
          {
            text: 'Статус платежа',
            value: 'status'
          }
        ]
      },
      ...mapGetters({
        charges: 'balance/charges',
        customers: 'balance/customers',
        loading: 'httpPending'
      })
    },
    methods: {
      ...mapActions({}),
      _getCustomer (charge) {
        const customer = this.customers.find(el => el.id === charge.customer)
        return customer ? customer.metadata.fio : `${charge.source.last4} ${charge.source.brand}`
      },
      details (item) {
        this.current = item
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
