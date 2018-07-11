<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm12>
        <v-card dark color="secondary">
          <v-card-text>
            <h2 style="text-align: center;">{{ $t('welcome') }}</h2>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <h3>{{ $t('task') }}</h3>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card dark color="info" class="todo">
          <v-card-title>{{ $t('current') }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="px-0">{{ tasks.length }}</v-card-text>
          <v-card-actions>
            <v-btn color="info" @click="showAll">{{ $t('details') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card dark color="success" class="finished">
          <v-card-title>{{ $t('today') }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="px-0">{{ todayTasks.length }}</v-card-text>
          <v-card-actions>
            <v-btn color="success" @click="showToday">{{ $t('details') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card dark color="error" class="expired">
          <v-card-title>{{ $t('expired') }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="px-0">{{ expiredTasks.length }}</v-card-text>
          <v-card-actions>
            <v-btn color="error" @click="showExpired">{{ $t('details') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <template v-if="user.permissions.indexOf('crud-tours') !== -1">
        <v-flex xs12 class="text-center">
          <h3>{{ $t('last_vouchers') }}</h3>
        </v-flex>
        <v-flex xs12>
          <v-data-table
            :headers="voucherHeaders"
            :items="vouchersItems"
            :no-results-text="$t('no_match_found')"
            :rows-per-page-text="$t('strings')"
            class="elevation-1">
            <template slot="items" slot-scope="props">
              <td>{{ props.item.tour }}</td>
              <td>{{ props.item.client }}</td>
              <td>{{ props.item.departure_date }}</td>
              <td>{{ props.item.arrival_date }}</td>
            </template>
            <template slot="no-data">
              <v-alert :value="true" color="red" icon="warning">
                Нет данных :(
              </v-alert>
            </template>
          </v-data-table>
        </v-flex>
      </template>
    </v-layout>

    <v-dialog
      v-model="dialog"
      max-width="1200"
    >
      <v-card>
        <v-card-title class="headline  text-xs-center">Задания</v-card-title>

        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="dialogTasks"
          >
            <template slot="items" slot-scope="props">
              <td>
                <v-edit-dialog
                  :return-value.sync="props.item.title"
                  large
                  lazy
                  persistent
                  @save="save(props.item)"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  <div>{{ props.item.title }}</div>
                  <div slot="input" class="mt-3 title">Обновить заголовок</div>
                  <v-text-field
                    slot="input"
                    v-model="props.item.title"
                    :rules="[max25chars]"
                    label="Изменить"
                    single-line
                    counter
                    autofocus
                  ></v-text-field>
                </v-edit-dialog>
              </td>
              <td>
                <v-edit-dialog
                  :return-value.sync="props.item.desc"
                  large
                  lazy
                  persistent
                  @save="save(props.item)"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  <div>{{ props.item.desc }}</div>
                  <div slot="input" class="mt-3 title">Обновить описание</div>
                  <v-text-field
                    slot="input"
                    v-model="props.item.desc"
                    :rules="[max25chars]"
                    label="Изменить"
                    single-line
                    counter
                    autofocus
                  ></v-text-field>
                </v-edit-dialog>
              </td>
              <td>{{ props.item.date }}</td>
              <td>
                <v-btn icon class="mx-0" @click="deleteTaskRequest(props.item.id)">
                  <v-icon color="pink">delete</v-icon>
                </v-btn>
              </td>
            </template>
          </v-data-table>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Ок
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snack" :timeout="10000" :color="snackColor" top>
      {{ snackText }}
      <v-btn flat @click="snack = false">OK</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script src="./scripts.js"></script>

<style lang="scss" scoped src="./styles.scss"></style>