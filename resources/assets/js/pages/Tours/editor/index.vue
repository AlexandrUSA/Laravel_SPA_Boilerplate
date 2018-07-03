<template>
  <div class="employee__create">
    <v-card>
      <v-card-title>
        <h2>{{title}}</h2>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid" ref="form" lazyValidation>
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex xs12>
                <h3><v-icon>person</v-icon> {{ $t('personal_data') }}</h3>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  :label="$t('title')"
                  v-model="item.title"
                  :rules="nameRules"
                  :counter="70"
                  required
                  clearable
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  :label="$t('service')"
                  v-model="item.service"
                  :rules="nameRules"
                  :counter="70"
                  required
                  clearable
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  :label="$t('country')"
                  v-model="item.country"
                  :counter="70"
                  clearable
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-switch
                  :label="$t('visa_service')"
                  v-model="item.visa_service"
                ></v-switch>
              </v-flex>
              <v-flex xs12>
                <v-switch
                  :label="$t('accommodation')"
                  v-model="item.accommodation"
                ></v-switch>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  :label="$t('days')"
                  v-model="item.days"
                  required
                  clearable
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  :label="$t('price')"
                  v-model="item.price"
                  required
                  clearable
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>

          <!-- Диалог для вывода ошибок -->
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
                  @click="hasErrors = false"
                >
                  OK
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>


          <v-btn outline color="info"
                 @click.native="save"
                 :disabled="!valid"
                 :loading="pending">
            {{ $t('ok') }}
          </v-btn>
          <v-btn outline color="error" @click.native="close">{{ $t('cancel') }}</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script src="./scripts.js"></script>

<style scoped>
  .card__title {
    justify-content: center;
  }
  .card__text {
    padding: 0 30px;
  }
</style>