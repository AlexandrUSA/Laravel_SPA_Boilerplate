<template>
    <v-list dense>
      <v-list-tile ripple :to="{name: 'home'}">
        <v-list-tile-action>
          <fa icon="home"/>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ $t('main') }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile ripple :to="{name: 'employees'}">
        <v-list-tile-action>
          <fa icon="briefcase" />
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ $t('employees') }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile ripple :to="{name: 'clients'}">
        <v-list-tile-action>
        <fa icon="address-book"/>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ $t('clients') }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
</template>

<script>
	export default {
    props: {
      user: {
        type: [Object],
        required: true
      }
    }
  }
</script>

<style scoped>
  .svg-inline--fa {
    font-size: 1.3rem;
  }
</style>