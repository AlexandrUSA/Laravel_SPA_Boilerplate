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
                :counter="70"
                required
                clearable
        ></v-text-field>
        <v-text-field
                label="Сумма перевода"
                v-model="form.amount"
                :counter="70"
                required
                clearable
        ></v-text-field>
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
      from_id: '',
      recipients: [],
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
      employees: 'employees/employees',
      loading: 'httpPending'
    })
  },
  methods: {
    ...mapActions({
      add: 'messages/add'
    }),
    async send () {
      this.form.from_id = this.user.id
      await this.add(this.form)
      this._resetForm()
      this.dialog = true
    },
    _resetForm ()
    {
        this.form.message = ''
        this.form.from_id = ''
        this.form.recipients = []
    }
  }
}
</script>

<style scoped lang="scss">
  .v-card__title {
    justify-content: center;
  }
</style>
