<template>
  <v-form v-model="valid" @submit.prevent="update" @keydown="form.onKeydown($event)">
    <v-text-field
      :label="$t('name')"
      v-model="form.name"
      :rules="form.nameRules"
      :counter="70"
      prepend-icon="person"
      required
    ></v-text-field>
    <has-error :form="form" field="name"/>

    <v-text-field
      :label="$t('email')"
      v-model="form.email"
      :rules="form.emailRules"
      prepend-icon="email"
      required
    ></v-text-field>
    <has-error :form="form" field="email" />

    <v-btn large block :loading="form.busy" type="submit">{{ $t('update') }}</v-btn>
  </v-form>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
  scrollToTop: false,
  data: () => ({
    date: null,
    menu: false,
    valid: false,
    form: new Form({
      name: '',
      nameRules: [
        v => !!v || this.$t('required_value'),
        v => v.length <= 70 || 'Name must be less than 70 characters'
      ],
      last_name: '',
      patronymic: '',
      email: '',
      emailRules: [
        v => !!v || this.$t('required_value'),
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      address: '',
      phone_number: null,
    })
  }),

  computed: {
    ...mapGetters({
      user: 'auth/user',
      employees: 'employees/employees'
    }),
    employee() {
      return this.employees.find(el => el.user_id == this.user.employee_id)
    }
  },
  created () {
    // Заполняем форму данными юзера.
    this.form.keys().forEach(key => {
      this.form[key] = this.user[key]
    })
  },

  methods: {
    async update () {
      const { data } = await this.form.patch('/api/settings/profile')
      const newEmployee = Object.assign({}, this.employee);
      newEmployee.first_name = data.name;
      this.$store.commit('employees/edit', newEmployee)
      this.$store.dispatch('auth/updateUser', data)
    }
  }
}
</script>
