<template>
  <v-form v-model="valid" @submit.prevent="send" @keydown="form.onKeydown($event)" lazyValidation>
    <v-card flat>
      <v-card-title>
        <h3>Выполнить платеж</h3>
      </v-card-title>
      <v-card-text>
        <v-text-field
                label="Сумма перевода"
                v-model="form.amount"
                required
                clearable
                prepend-icon="attach_money"
        ></v-text-field>
        <v-select
          :items="customers"
          item-text="metadata.fio"
          item-value="id"
          v-model="form.customer"
          auto
          label="Выбрать потребителя"
          prepend-icon="person"
          single-line
          required
        ></v-select>
        <v-textarea label="Доп. информация"
                    v-model="form.description"
                    prepend-icon="info">
        </v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-btn large block
               :loading="loading"
               type="submit"
               :disabled="!valid">
          Отправить
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog
            v-model="dialog"
            max-width="400"
    >
      <v-card>
        <v-card-title class="headline">Сообщение отправлено!</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
                  color="green darken-1"
                  flat="flat"
                  @click="dialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
import Form from 'vform'
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    dialog: false,
    date: null,
    menu: false,
    valid: false,
    form: {
      amount: '',
      customer: '',
      description: '',
      currency: 'USD'
    }
  }),
  watch: {
    toUser () {
      console.log(this.toUser)
      if (this.toUser.id) {
        this.form.recipients = [this.toUser.id]
      }
    },
    oldMessage () {
      if (this.oldMessage) this.form.message = this.oldMessage
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      customers: 'balance/customers',
      loading: 'httpPending'
    })
  },
  methods: {
    ...mapActions({
      add: 'balance/makeCharge'
    }),
    async send () {
      await this.add(this.form)
      this._resetForm()
      this.dialog = true
    },
    _resetForm ()
    {
        this.form.card = ''
        this.form.description = ''
        this.form.amount = ''
    }
  }
}
</script>

<style scoped lang="scss">
  .v-card__title {
    justify-content: center;
  }
</style>
