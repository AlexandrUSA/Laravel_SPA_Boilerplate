<template>
  <v-form v-model="valid" 
          @submit.prevent="login" 
          @keydown="form.onKeydown($event)">
    <has-error :form="form" field="email"/>
    <v-text-field
      :label="$t('email')"
      v-model="form.email"
      :rules="emailRules"
      prepend-icon="email"
      type="email"
      required
    ></v-text-field>
    
    <has-error :form="form" field="password" />
    <v-text-field
      :label="$t('password')"
      v-model="form.password"
      :rules="passwordRules"
      prepend-icon="vpn_key"
      type="password"
      required
    ></v-text-field>
    
    <v-checkbox
      :label="$t('remember_me')"
      v-model="remember"
      name="remember"
    ></v-checkbox>
    <v-btn block large type="submit" 
           :loading="form.busy">
         {{ $t('login') }}
    </v-btn>
    <v-btn flat small
           :to="{ name: 'password.request' }">
      {{ $t('forgot_password') }}
    </v-btn>
  </v-form>         
</template>

<script>
import Form from 'vform';
import { mapGetters, mapActions } from 'vuex';


export default {
  middleware: 'guest',

  metaInfo () {
    return { title: this.$t('login') }
  },

  data: () => ({
    form: new Form({
      email: '',
      password: '',
    }),
    valid: false,
    emailRules: [
      v => !!v || "Введите значение"
    ],
    passwordRules: [
      v => !!v || "Введите значение"
    ],
    remember: false
  }),

  methods: {
    async login () {
      //Отправка формы.
      const { data } = await this.form.post('/api/login')

      // Сохранить токен.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Получить юзера.
      await this.$store.dispatch('auth/fetchUser')
      console.log('logged');
      this.loadContent();
      // Перенаправление на домашнюю.
      this.$router.push({ name: 'home' })
    },
    ...mapActions({
      employees: 'employees/load',
      departments: 'departments/load',
      positions: 'positions/load'
    }),
    loadContent() {
      this.employees();
      this.departments();
      this.positions();  
    }
  }
}
</script>

<style scoped lang="scss">



</style>