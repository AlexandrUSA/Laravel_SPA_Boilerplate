<template>
  <div id="departments">
    <h2>Подразделения</h2>
    <v-dialog v-model="deleteWindow" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ $t('attention') }}</span>
        </v-card-title>
        <v-card-text>
          <v-flex xs12>{{deleteMsg}}</v-flex>
        </v-card-text>
        <v-card-actions>
          <v-btn v-show="!deleteDenied" outline color="info" @click.native="deleteConfirm">{{ $t('ok') }}</v-btn>
          <v-btn outline color="error" @click.native="deleteCancel">{{ $t('cancel') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="departmentCreate" max-width="500px">
      <v-btn color="primary" dark slot="activator" class="mb-2" @click="departmentCreate = true">Добавить подразделение</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Новое подразделение</span>
        </v-card-title>
        <v-card-text>
          <v-flex xs12>
            <v-text-field label="Наименование" v-model="departmentName"></v-text-field>
          </v-flex>
        </v-card-text>
        <v-card-actions>
          <v-btn outline color="info" @click.native="addConfirm">{{ $t('ok') }}</v-btn>
          <v-btn outline color="error" @click.native="addCancel">{{ $t('cancel') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card>
      <v-data-table
        :headers="headers"
        :items="items"
        item-key="id"
        :no-results-text="$t('no_match_found')"
        :rows-per-page-text="$t('strings')"
        class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.id }}</td>
          <td>
            <v-edit-dialog
              :return-value.sync="props.item.title"
              lazy
            > {{ props.item.title }}
              <v-text-field
                slot="input"
                label="Edit"
                v-model="props.item.title"
                single-line
                counter
                @change="editItem(props.item)"
              ></v-text-field>
            </v-edit-dialog>
          </td>
          <td>
            <router-link tag="span"
                         :to="{name: 'positions', params: {
                                 searchProp: props.item.title
                               }}">
              {{ props.item.positions }}
            </router-link>
          </td>
          <td>
            <router-link tag="span"
                         :to="{name: 'employees', params: {
                                 searchProp: props.item.title
                               }}">
              {{ props.item.employees }}
            </router-link>
          </td>
          <td>
            <v-btn icon class="mx-0" @click="deleteItem(props.item.id)">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
          </td>
        </template>
        <template slot="no-data">
          <v-alert :value="true" color="red" icon="warning">
            Нет данных :(
          </v-alert>
        </template>
      </v-data-table>

      <v-snackbar :timeout="snackbarTimeout" top v-model="snackbarShow" multi-line color="info">
        {{ snackbarMessage }}
        <v-btn flat color="pink" @click.native="snackbarShow = false">{{ $t('ok') }}</v-btn>
      </v-snackbar>

    </v-card>
  </div>
  <!--
  <file-pond
          name="test"
          ref="pond"
          class-name="my-pond"
          label-idle="Перекиньте файлы сюда"
          labelFileTypeNotAllowed="Данный формат не поддерживается"
          allow-multiple="true"
          accepted-file-types="image/jpeg, image/png, application/msword"
          v-bind:files="myFiles"
          v-on:init="handleFilePondInit"/>
  -->
</template>

<script src="./scripts.js"></script>

<style scoped lang="scss" src="./styles.scss"></style>