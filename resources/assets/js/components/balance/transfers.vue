<template>
  <v-card flat>
    <v-card-title>
      <h3>Ваши переводы</h3>
    </v-card-title>
    <v-card-text>
      <v-data-table
              :headers="headers"
              :items="items"
              :search="search"
              :loading="loading"
              v-model="selected"
              select-all
              item-key="id"
              :no-results-text="$t('no_match_found')"
              :rows-per-page-text="$t('strings')"
              class="elevation-1"
      >
        <v-progress-linear slot="progress" indeterminate></v-progress-linear>
        <template slot="items" slot-scope="props">
          <td>
            <v-checkbox
                    primary
                    hide-details
                    v-model="props.selected"
            ></v-checkbox>
          </td>
          <td>{{ props.item.date }}</td>
          <td>{{ props.item.amount }}</td>
          <td>{{ props.item.dest }}</td>
          <td>{{ props.item.status }}</td>
          <td>
            <v-btn outline round>{{ $t('details') }}</v-btn>
          </td>
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
      search: '',
      selected: [],
    }),
    computed: {
      items () {
        const data = []
        this.transfers.forEach(el => {
          const date = el.created * 99999
          console.log(date, 34)
          data.push({
            id: el.id,
            date: moment(date),
            amount: el.amount + ' ' + el.currency,
            dest: el.source.brand,
            status: el.status
          })
        })
        return data
      },
      headers () {
        return [
          {
            text: 'Дата',
            value: 'name'
          },
          {
            text: 'Сумма',
            value: 'last_name'
          },
          {
            text: 'Получатель',
            value: 'position_title'
          },
          {
            text: 'Статус',
            value: 'department_title'
          },
          {
            text: this.$t('actions'),
            align: 'left',
            sortable: false
          }
        ]
      },
      ...mapGetters({
        transfers: 'balance/transfers',
        loading: 'httpPending'
      })
    },
    methods: {
      ...mapActions({}),
      deleteItem () {
          this.showEmail = false
          this.remove({
            id: this.current.id,
            type: 'received'
          })

      }
    }
  }
</script>

<style scoped lang="scss">

</style>
