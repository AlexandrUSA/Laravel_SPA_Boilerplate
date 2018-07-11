<template>
  <v-card flat>
    <v-dialog v-model="dialog" max-width="500px">
      <v-btn color="primary" dark slot="activator" class="mb-2" @click="dialog = true">Добавить потребителя</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Новый потребитель</span>
        </v-card-title>
        <v-card-text>
          <v-text-field label="ФИО"
                        v-model="edited.name"
                        prepend-icon="person"
                        clearable>
          </v-text-field>
          <v-text-field label="Email"
                        v-model="edited.email"
                        prepend-icon="email"
                        clearable>
          </v-text-field>
          <v-text-field label="Номер карты"
                        v-model="edited.card"
                        prepend-icon="euro_symbol"
                        clearable>
          </v-text-field>
          <v-textarea
            name="description"
            v-model="edited.description"
            label="Описание"
            hint="Краткое описание потребителя"
            prepend-icon="info"
            clearable
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn outline color="info" @click.native="editorConfirm">{{ $t('ok') }}</v-btn>
          <v-btn outline color="error" @click.native="editorCancel">{{ $t('cancel') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card-title>
      <h3>Ваши переводы</h3>
    </v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="customers"
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
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.metadata.fio }}</td>
          <td>{{ props.item.metadata.card }}</td>
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
    </v-card-text>
  </v-card>
</template>

<script src="./scripts.js"></script>

<style scoped lang="scss" src="./styles.scss"></style>