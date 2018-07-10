<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <span class="headline">Настройки внешнего вида приложения</span>
          </v-card-title>
          <v-card-text>
            <v-switch label="Темная тема"
                      v-model="darkMode"></v-switch>
            <!--<v-switch label="Боковая панль права" v-model="rightMode"></v-switch>-->
            <v-switch label="Мини вариант"
                      v-model="miniVariantMode"></v-switch>
            <v-switch label="Боковая под шапкой"
                      v-model="clippedMode"></v-switch>
            <!--<v-switch label="fixed" v-model="fixedMode"></v-switch>-->
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script src="./scripts.js"></script>

<style lang="scss" scoped src="./styles.scss"></style>