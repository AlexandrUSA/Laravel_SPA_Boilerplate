<template>
  <div class="auth-wrapper" :class="state">
    <div class="auth">
      <div class="auth-switch">
        <div class="auth-switch__text"
             :class="{'fadeIn': !switchText, 'fadeOut': switchText}">
          <h2> {{ title }} </h2> 
          <v-btn @click.prevent="toggleAuth">{{message}}</v-btn>
        </div>    
      </div>
      <div class="auth-form">
        <v-card height="500">
          <v-card-text>
            <transition  enter-active-class="AuthEnter" leave-active-class="AuthLeave" mode="out-in">
              <component :is="authComponent"></component>
            </transition>
          </v-card-text>
        </v-card>      
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import LoginInput from '~/components/auth/LoginInput';
import RegisterInput from '~/components/auth/RegisterInput';

export default {
  middleware: 'guest',

  components: {
    'login-input': LoginInput,
    'register-input': RegisterInput
  },
  metaInfo () {
    return { title: this.$t('login') }
  },
  data: () => ({
    register: false,
    signingin: true,
    state: 'signingin',
    switchText: false,
    form: new Form({
      email: '',
      password: ''
    }),
    remember: false
  }),
  computed: {
    // Вычисляем тип компонента, заголовок и текст авторизации
    authComponent() {
      return (this.state === 'signingin') ? 'login-input' : 'register-input';
    },
    title() {
      return (this.state === 'signingin') ? this.$t('login') : this.$t('register');
    },
    message() {
      return (this.state === 'signingin') ? this.$t('has_not_account') : 
                                            this.$t('has_account');
    }
  },
  methods: {
    toggleAuth() {
      this.switchText = true;
      setTimeout(() => { 
        this.state = (this.state === 'signingin') ? 'registration' : 'signingin';
        setTimeout(() => this.switchText = false, 1000);
      }, 500);
    }
  }
}
</script>

<style lang="scss" scoped>

.auth {
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 500px;
  margin: 30px auto;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);
  border: 0px solid transparent;
  transition: background-color 1s, height .5s;
}


.auth-switch,
.auth-form {
  position: absolute;
  width: 50%;
  height: 100%;
  transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.signingin .auth-switch {
  left: 0%;
}

.signingin .auth-form {
  left: 50%;
}

.auth-switch {
  left: 50%; 
  padding-top: 120px;
  text-align: center;
}

.auth-switch__text {
  transition: transform .35s;
}

h2 {
  text-align: center;
}

.icon {
  font-size: 42px;  
  color: #8E8E8E;
}

form {
  transition: opacity .35s;
}

.AuthEnter {
  opacity: 1;
}

.AuthLeave {
  opacity: 0;
}

.auth-form {
  left: 0%;
  z-index: 2;
  text-align: center;
  transition-property: left, background-color;
  box-shadow: 0 0 15px #000;
}

.card {
  padding: 50px 30px;
}

.fadeOut {
  transform: scale(0);
}

.fadeIn {
  transform: scale(1);
}
</style>
