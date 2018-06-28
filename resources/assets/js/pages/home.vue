<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm12>
        <v-card dark color="secondary">
          <v-card-text>
            <h2 style="text-align: center;">{{ $t('welcome') }}</h2>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <h3>Задачи</h3>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-card dark color="error" class="expired">
          <v-card-title>Просроченные</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="px-0">2</v-card-text>
          <v-card-actions>
            <v-btn color="error">Подробнее</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card dark color="info" class="todo">
          <v-card-title>Текущие</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="px-0">12</v-card-text>
          <v-card-actions>
            <v-btn color="info">Подробнее</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-card dark color="success" class="finished">
          <v-card-title>Выполненные</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="px-0">3</v-card-text>
          <v-card-actions>
            <v-btn color="success">Подробнее</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <!--<v-flex xs12 sm10 md6>-->
        <!--<v-card dark color="secondary">-->
          <!--<v-card-text class="px-0">6</v-card-text>-->
        <!--</v-card>-->
      <!--</v-flex>-->

      <!--<v-flex xs12 sm10 md6>-->
        <!--<v-card dark color="secondary">-->
          <!--<v-card-text class="px-0">6</v-card-text>-->
        <!--</v-card>-->
      <!--</v-flex>-->

      <!--<v-flex v-for="i in 3" :key="`4${i}`" xs4>-->
        <!--<v-card dark color="primary">-->
          <!--<v-card-text class="px-0">4</v-card-text>-->
        <!--</v-card>-->
      <!--</v-flex>-->
      <!--<v-flex v-for="i in 4" :key="`3${i}`" xs3>-->
        <!--<v-card dark color="secondary">-->
          <!--<v-card-text class="px-0">3</v-card-text>-->
        <!--</v-card>-->
      <!--</v-flex>-->
      <!--<v-flex v-for="i in 6" :key="`2${i}`" xs2>-->
        <!--<v-card dark color="primary">-->
          <!--<v-card-text class="px-0">2</v-card-text>-->
        <!--</v-card>-->
      <!--</v-flex>-->
      <!--<v-flex v-for="i in 12" :key="`1${i}`" xs1>-->
        <!--<v-card dark color="secondary">-->
          <!--<v-card-text class="px-0">1</v-card-text>-->
        <!--</v-card>-->
      <!--</v-flex>-->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
  	return {
  		e2: 3
  	}
  },
  computed: {
      color () {
        switch (this.e2) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
      }
    }
  },
  metaInfo () {
    return { title: this.$t('home') }
  }
}
</script>

<style lang="scss">
  /*.row {*/
    /*justify-content: center;*/
  /*}*/

  .px-0 {
    font-size: 26px;
  }
</style>
