<template>
  <div id="admin">
    <!-- Основной контент -->
    <v-content> 
      <transition  enter-active-class="routerEnter" leave-active-class="routerLeave" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content> 
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      

      
    }
  },
  computed: mapGetters({
    user: 'auth/user',
    drawer: 'theme/drawer'
  })
}
</script>


<style>

#admin .application--wrap {
  min-height: auto !important;
}

  h2 {
    font-size: 22px;
    font-weight: normal;
    text-align: center;
  }

  main.content {
    padding-top: 0 !important;
  }

  .application .application--wrap {
    position: relative;
    min-height: auto;
  }

  .card__title {
    justify-content: center;
  }

  .title__icon {
    font-size: 35px;
    margin: 0 10px;
  }

  .input-group__details .input-group__error {
    display: block;
    flex:none;
  }
  
  .buttons {
    width: 100%;
    height: 70px;
    margin-top: 40px;
    text-align: center;
  }
  .routerEnter {
    animation: routerEnter .6s;
  }

  .routerLeave {
    animation: routerLeave .6s;
  }

  .buttonEnter {
    animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);
  }

  .buttonLeave {
    animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);
  }

  @keyframes routerEnter {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

  @keyframes routerLeave {
    0% {opacity: 1;}
    100% {opacity: 0;}
  }

  @keyframes buttonEnter {
    0% {transform: scale(0);}
    100% {transform: scale(1);}
  }

  @keyframes buttonLeave {
    0% {transform: scale(1);}
    100% {transform: scale(0);}
  }
 
</style>