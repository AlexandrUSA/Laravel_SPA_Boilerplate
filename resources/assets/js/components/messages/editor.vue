<template>
  <v-form v-model="valid" @submit.prevent="send" @keydown="form.onKeydown($event)" lazyValidation>
    <v-card flat>
      <v-card-title>
        <h3>Написать письмо</h3>
      </v-card-title>
      <v-card-text>
        <v-textarea
          name="message"
          label="Введите сообщение"
          v-model="form.message"
          hint="Ваше сообщение"
        >
        </v-textarea>
        <v-autocomplete
          v-model="form.recipients"
          :items="employees"
          box
          chips
          color="blue-grey lighten-2"
          label="Выберите получателя(ей)"
          item-text="name"
          item-value="id"
          multiple
        >
          <template
            slot="selection"
            slot-scope="data"
          >
            <v-chip
              :selected="data.selected"
              close
              class="chip--select-multi"
              @input="data.parent.selectItem(data.item)"
            >
              {{ data.item.name }}
            </v-chip>
          </template>
          <template
            slot="item"
            slot-scope="data"
          >
            <v-list-tile-content>
              <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
              <v-list-tile-sub-title v-html="data.item.last_name"></v-list-tile-sub-title>
            </v-list-tile-content>
          </template>
        </v-autocomplete>
      </v-card-text>
      <v-card-actions>
        <v-btn large block
               :loading="form.busy"
               type="submit"
               :disabled="!valid">
          Отправить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import Form from 'vform'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    toUser: {
      type: Object,
      default: {}
    },
    oldMessage: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    date: null,
    menu: false,
    valid: false,
    form: {
      message: '',
      from_id: '',
      recipients: [],
    }
  }),
  watch: {
    toUser () {
      if (this.toUser.id) this.form.recipients.push(this.toUser.id)
    },
    oldMessage () {
      if (this.oldMessage) this.form.message = this.oldMessage
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      employees: 'employees/employees'
    })
  },
  methods: {
    ...mapActions({
      add: 'messages/add'
    }),
    async send () {
      this.form.from_id = this.user.id
      await this.add(this.form)
    }
  }
}
</script>

<style scoped lang="scss">
  .v-card__title {
    justify-content: center;
  }
</style>
