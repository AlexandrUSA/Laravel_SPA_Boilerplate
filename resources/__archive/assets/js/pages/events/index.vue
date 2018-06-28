<template>
  <div id='app'>
    <v-calendar
      :attributes='attributes'
      @dayclick='dayClicked'>
    </v-calendar>
  </div>
</template>

<script src="./scripts.js"></script>

<style lang="scss" scoped="">
  #app {
    display: flex;
  }

  .selected-day {
    margin-left: 10px;
  }
</style>