<template>
<v-container>
  <v-layout wrap>
    <v-flex xs12>
      <h2>{{ $t('nav-balance') }}</h2>
      <!--<h2 v-if="balance.amount">-->
        <!--Текущий баланс: {{ balance.amount / 100 + ' ' + balance.currency.toUpperCase() }}-->
      <!--</h2>-->
        <v-tabs
                v-model="active"
                dark
                slider-color="yellow"
        >
          <v-tab
                  v-for="tab in tabs"
                  :key="tab.id"
                  ripple
          >
            {{ tab.title }}
          </v-tab>
          <v-tab-item
                  v-for="tab in tabs"
                  :key="tab.id"
          >
            <component :is="tab.component"></component>
          </v-tab-item>
        </v-tabs>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script src="./scripts.js"></script>

<style lang="scss" scoped>

</style>