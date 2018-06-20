<template>
  <div id="positions">
    <!--Диалог удаления должности-->
    <v-dialog v-model="deleteWindow" max-width="800px">
      <v-btn color="primary" dark slot="activator" class="mb-2">Добавить должность</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Внимание!</span>
        </v-card-title>
        <v-card-text>
          {{ deleteMsg }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="deleteWindow = !deleteWindow">Отмена</v-btn>
          <v-btn v-show="!deleteDenied" color="blue darken-1" flat @click.native="deleteConfirm">Удалить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog" max-width="500px">
      <!-- Кнопка добавления должности -->
      <v-btn color="primary" dark slot="activator" class="mb-2">Добавить должность</v-btn>
      <!-- Диалог добавления / изменения должности -->
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field label="Наименование" v-model="editedItem.title"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :label="$t('department')"
                  v-model="+editedItem.department_id"
                  prepend-icon="card_travel"
                  :items="departments"
                  item-text="title"
                  item-value="id"
                  :rules="[v => !!v || 'Выберите подразделение']"
                  required
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card>
      <v-card-title class="t-head">
        <h2>{{ $t('positions') }}</h2>
        <v-spacer></v-spacer>
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
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-right">{{ props.item.id }}</td>
          <td class="text-xs-right">{{ props.item.title }}</td>
          <td class="text-xs-right">{{ props.item.department }}</td>
          <td class="text-xs-right">
            <router-link tag="span"
                         :to="{name: 'employees', params: {
                                 searchProp: props.item.title
                               }}">
              {{ props.item.employees }}
            </router-link>
          </td>
          <td class="text-xs-right">
            <v-btn icon class="mx-0" @click="editItem(props.item.id)">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="deleteItem(props.item)">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
          </td>
        </template>
        <template slot="no-data">
          <v-btn color="primary" @click="">Обновить</v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script src="./scripts.js"></script>

<style scoped lang="scss" src="./styles.scss"></style>