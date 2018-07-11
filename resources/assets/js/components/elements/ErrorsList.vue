<template>
  <v-dialog
    v-model="hasErrors"
    max-width="800"
  >
    <v-card>
      <v-card-title class="headline">Ошибка валидации данных!</v-card-title>

      <v-card-text>
        <h3>Во время валидации данных были обнаружены следубщие ошибки:</h3>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <ul>
          <li v-for="(error, name) in errors"
              :key="name">
            {{ error[0] }}
          </li>
        </ul>

      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="red darken-1"
          flat="flat"
          @click="close"
        >
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'ErrorsList',
    props: {
      hasErrors: {
        type: [Boolean, String],
        required: true
      },
      errors: {
        type: [Array, Object],
        required: true
      }
    },
    methods: {
      close () {
        this.$emit('CloseErrors')
      }
    }
  }
</script>