<template>
  <div class="employee__create">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <h2>{{title}}
                <v-icon class="title__icon">{{titleIcon}}</v-icon>
              </h2>
            </v-card-title>
            <v-card-text>
              <v-form v-model="valid" ref="form" lazyValidation>
                <v-container grid-list-md>
                  <v-layout row wrap>
                    <v-flex xs4>
                      <v-card class="employee__avatar-container">
                        <v-card-media :src="itemAvatar" height="200px"></v-card-media>
                        <div class="avatar__overlay">
                          <upload-button :title="$t('change_image')" @fileUpload="updatePhoto"></upload-button>
                        </div>
                      </v-card>
                    </v-flex>
                    <v-flex xs8>
                      <v-text-field
                        :label="$t('name')"
                        v-model="item.name"
                        :rules="nameRules"
                        :counter="70"
                        required
                        clearable
                      ></v-text-field>
                      <v-text-field
                        :label="$t('last_name')"
                        v-model="item.last_name"
                        :rules="nameRules"
                        :counter="70"
                        required
                        clearable
                      ></v-text-field>
                      <v-text-field
                        :label="$t('patronymic')"
                        v-model="item.patronymic"
                        :counter="70"
                        clearable
                      ></v-text-field>
                      <v-text-field
                        :label="$t('email')"
                        v-model="item.email"
                        :rules="emailRules"
                        :counter="70"
                        required
                        clearable
                      ></v-text-field>
                      <v-text-field
                        :label="$t('phone_number')"
                        v-model="item.phone_number"
                        :counter="70"
                        clearable
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12 sm6>
                      <v-menu
                        ref="menu"
                        lazy
                        :close-on-content-click="false"
                        v-model="menu"
                        transition="scale-transition"
                        offset-y
                        full-width
                        :nudge-right="40"
                        min-width="290px"
                        :return-value.sync="date"
                      >
                        <v-text-field
                          slot="activator"
                          :label="$t('birthday')"
                          v-model="item.birthday"
                          prepend-icon="event"
                          readonly
                        ></v-text-field>
                        <v-date-picker v-model="item.birthday" no-title scrollable>
                          <v-spacer></v-spacer>
                          <v-btn flat color="primary" @click="menu = false">{{ $t('cancel') }}</v-btn>
                          <v-btn flat color="primary" @click="$refs.menu.save(date)">{{ $t('ok') }}</v-btn>
                        </v-date-picker>
                      </v-menu>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-select
                        label="Пол"
                        v-model="item.sex"
                        prepend-icon="card_travel"
                        :items="['Мужской', 'Женский']"
                        clearable
                      ></v-select>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12 sm6>
                      <v-select
                        :label="$t('position')"
                        v-model="item.role_id"
                        prepend-icon="card_travel"
                        :items="positions"
                        item-text="display_name"
                        item-value="id"
                        :rules="[v => !!v || 'Выберите должность']"
                        clearable
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-text-field
                        :label="$t('salary')"
                        v-model="item.salary"
                        prepend-icon="attach_money"
                        required
                        clearable
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-text-field
                        :label="$t('address')"
                        v-model="item.address"
                        prepend-icon="home"
                        clearable
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-text-field
                        :label="$t('passport')"
                        v-model="item.passport"
                        prepend-icon="contact_mail"
                        clearable
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-textarea
                        v-model="item.details"
                        name="details"
                        box
                        label="Дополнительная информация"
                        auto-grow
                        clearable
                      ></v-textarea>
                    </v-flex>
                  </v-layout>
                </v-container>


                <!-- Сообщение с ошибками валидации на сервере -->
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

                <v-btn large
                       color="info"
                       @click.native="save"
                       :disabled="!valid"
                       :loading="pending">
                  {{ $t('ok') }}
                </v-btn>
                <v-btn large
                       color="error"
                       @click.native="close">
                  {{ $t('cancel') }}
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script src="./scripts.js"></script>

<style scoped lang="scss" src="./styles.scss"></style>