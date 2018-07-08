<template>
  <div id="clients-list">
    <h2>{{ title }}</h2>
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
        v-model="selected"
        :loading="loading"
        select-all
        item-key="id"
        :no-results-text="$t('no_match_found')"
        :rows-per-page-text="$t('strings')"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>
            <v-checkbox
              primary
              hide-details
              v-model="props.selected"
            ></v-checkbox>
          </td>
          <td>{{ props.item.fio }}</td>
          <td>{{ props.item.country }}</td>
          <td>{{ props.item.city }}</td>
          <td>{{ props.item.street }}</td>
          <td>{{ props.item.number }}</td>
          <td>{{ props.item.phone_number }}</td>
          <td>
            <v-btn icon class="mx-0"
                   :to="{name: 'clientShow', params: { id: props.item.id }}">
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
        <v-btn fab dark large color="cyan" :to="{ name: 'clientCreate' }">
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
               title="Клиенты"
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