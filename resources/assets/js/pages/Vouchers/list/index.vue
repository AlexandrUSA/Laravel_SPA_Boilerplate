<template>
  <div id="employees">
    <h2>{{ cardTitle }}</h2>
    <v-dialog v-model="deleteWindow" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ $t('attention') }}</span>
        </v-card-title>
        <v-card-text>
          <v-flex xs12>{{ deleteMsg }}</v-flex>
        </v-card-text>
        <v-card-actions>
          <v-btn outline color="info" @click.native="deleteConfirm">{{ $t('ok') }}</v-btn>
          <v-btn outline color="error" @click.native="deleteCancel">{{ $t('cancel') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="tourCreate" max-width="800px">
      <v-form ref="form" v-model="valid">
        <v-card>
          <v-card-title>
            <span class="headline">Новая путевка</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-select
                    :label="$t('tour')"
                    v-model="editedTour.tour_id"
                    prepend-icon="card_travel"
                    :items="tours"
                    item-text="title"
                    item-value="id"
                    :rules="[v => !!v || 'Выберите тур']"
                    required
                    clearable
                  ></v-select>
                </v-flex>
                <v-flex xs12>
                  <v-select
                    :label="$t('client')"
                    v-model="editedTour.client_id"
                    prepend-icon="person"
                    :items="clients"
                    item-text="last_name"
                    item-value="id"
                    :rules="[v => !!v || 'Выберите клиента']"
                    required
                    clearable
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-menu
                    ref="menu1"
                    lazy
                    :close-on-content-click="false"
                    v-model="departDate"
                    transition="scale-transition"
                    offset-y
                    full-width
                    :nudge-right="40"
                    min-width="290px"
                    :return-value.sync="date1"
                  >
                    <v-text-field
                      slot="activator"
                      :label="$t('departure_date')"
                      v-model="editedTour.departure_date"
                      prepend-icon="event"
                      readonly
                      required
                      clearable
                    ></v-text-field>
                    <v-date-picker v-model="editedTour.departure_date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="departDate = false">{{ $t('cancel') }}</v-btn>
                      <v-btn flat color="primary" @click="$refs.menu1.save(date1)">{{ $t('ok') }}</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-menu
                    ref="menu2"
                    lazy
                    :close-on-content-click="false"
                    v-model="arrivalDate"
                    transition="scale-transition"
                    offset-y
                    full-width
                    :nudge-right="40"
                    min-width="290px"
                    :return-value.sync="date2"
                  >
                    <v-text-field
                      slot="activator"
                      :label="$t('arrival_date')"
                      v-model="editedTour.arrival_date"
                      prepend-icon="event"
                      readonly
                      required
                      clearable
                    ></v-text-field>
                    <v-date-picker v-model="editedTour.arrival_date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="arrivalDate = false">{{ $t('cancel') }}</v-btn>
                      <v-btn flat color="primary" @click="$refs.menu2.save(date2)">{{ $t('ok') }}</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn outline color="info"
                   @click.native="addConfirm"
                   :disabled="!valid">{{ $t('ok') }}</v-btn>
            <v-btn outline color="error" @click.native="addCancel">{{ $t('cancel') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>

    <v-card>
      <v-card-title>
        <v-text-field
          append-icon="search"
          :label="$t('search_input')"
          single-line
          v-model="search"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        :loading="loading"
        v-model="selected"
        select-all
        item-key="id"
        :no-results-text="$t('no_match_found')"
        :rows-per-page-text="$t('strings')"
        class="elevation-1"
      >
        <v-progress-linear slot="progress" color="grey darken-1" indeterminate></v-progress-linear>
        <template slot="items" slot-scope="props">
          <td>
            <v-checkbox
              primary
              hide-details
              v-model="props.selected"
            ></v-checkbox>
          </td>
          <td>{{ props.item.tour }}</td>
          <td>{{ props.item.client }}</td>
          <td>{{ props.item.departure_date }}</td>
          <td>{{ props.item.arrival_date }}</td>
          <td>
            <v-btn icon class="mx-0" @click="editItem(props.item)">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
          </td>
        </template>
        <template slot="no-data">
          <v-alert :value="true" color="red" icon="warning">
            Нет данных :(
          </v-alert>
        </template>
      </v-data-table>
      <div class="table__buttons">
        <v-btn fab dark large color="cyan"
               title="Добавить"
               @click="createItem">
          <v-icon dark>add</v-icon>
        </v-btn>
        <v-btn v-if="!isArchive"
               fab dark large
               color="light-blue darken-1"
               title="Архив"
               @click="loadItems(true)">
          <fa icon="archive"/>
        </v-btn>
        <v-btn fab dark large
               color="light-blue darken-1"
               title="Сотрудники"
               @click="loadItems(false)"
               v-else>
          <fa icon="address-card"/>
        </v-btn>
        <transition enter-active-class="buttonEnter" leave-active-class="buttonLeave" mode="out-in">
          <v-btn v-show="selected.length > 0" class="delete-btn" fab large dark @click="deleteDialog(selected)">
            <v-icon>delete</v-icon>
          </v-btn>
        </transition>
      </div>
      <v-snackbar :timeout="snackbarTimeout" top v-model="snackbarShow" multi-line color="info">
        {{ $t('delete_done') }}
        <v-btn flat color="pink" @click.native="snackbarShow = false">{{ $t('ok') }}</v-btn>
      </v-snackbar>
    </v-card>
  </div>
</template>

<script src="./scripts.js"></script>

<style scoped lang="scss" src="./styles.scss"></style>