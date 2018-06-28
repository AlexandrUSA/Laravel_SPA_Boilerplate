<template>
  <div class="calendar">
    <vue-event-calendar :events="events"
                        @day-changed="handleDayChanged">
      <template slot-scope="props">
        <v-data-table
          :headers="headers"
          :items="events"
          item-key="id"
          :no-results-text="$t('no_match_found')"
          :rows-per-page-text="$t('strings')"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.title }}</td>
            <td>{{ props.item.date }}</td>
            <td>
              <v-btn outline round>{{ $t("details") }}</v-btn>
            </td>
          </template>
          <template slot="no-data">
            <v-alert :value="true" color="red" icon="warning">
              Нет заданий :(
            </v-alert>
          </template>
        </v-data-table>


        <!--<v-list two-line>-->
          <!--<template v-for="(item) in props.showEvents">-->
            <!--<v-list-tile-->
              <!--:key="item.id"-->
              <!--ripple-->
              <!--@click="toggleShowItem(item.id)"-->
            <!--&gt;-->
              <!--<v-list-tile-content>-->
                <!--<v-list-tile-title>{{ item.title }}</v-list-tile-title>-->
                <!--<v-list-tile-sub-title>{{ item.desc }}</v-list-tile-sub-title>-->
                <!--<v-list-tile-sub-title v-if="item.expired"-->
                                       <!--class="task-info expired">-->
                  <!--Просрочено!-->
                <!--</v-list-tile-sub-title>-->
                <!--<v-list-tile-sub-title v-if="item.completed"-->
                                       <!--class="task-info completed">-->
                  <!--Выполнено!-->
                <!--</v-list-tile-sub-title>-->
              <!--</v-list-tile-content>-->
              <!--<v-list-tile-action>-->
                <!--<v-list-tile-action-text>{{ item.date }}</v-list-tile-action-text>-->
                <!--<v-icon-->
                  <!--v-if="findIndex(item.id) > -1"-->
                  <!--color="yellow darken-2"-->
                <!--&gt;star-->
                <!--</v-icon>-->
                <!--<v-icon-->
                  <!--color="grey lighten-1"-->
                  <!--v-else-->
                <!--&gt;star_border-->
                <!--</v-icon>-->
              <!--</v-list-tile-action>-->
            <!--</v-list-tile>-->
            <!--<v-divider></v-divider>-->
          <!--</template>-->
        <!--</v-list>-->
        <div v-if="selected.length"
             class="cal-buttons text-xs-center">
          <v-btn
            color="success"
            class="white--text"
            @click="addToCompleted">
            Выполнено
          </v-btn>
          <v-btn
            color="error"
            @click="deleteDialog = true">
            Снять задачу
          </v-btn>
        </div>
      </template>
    </vue-event-calendar>
    <v-btn v-if="newEvent.date"
           color="secondary"
           block
           large
           @click="createDialog = true"
    >
      Добавить задачу
    </v-btn>

    <v-dialog v-model="deleteDialog" persistent max-width="450">
      <v-card>
        <v-card-title class="headline">Вы хотите снять выбранные задачи?</v-card-title>
        <v-card-text>Это приведет к удалению данных из списка.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" flat @click.native="deleteDialog = false">Отмена</v-btn>
          <v-btn color="error" flat @click.native="removeItems">Удалить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="createDialog" max-width="500px">
      <form @submit.prevent="requestNewTask" @keydown="newEvent.onKeydown($event)">
        <v-card>
          <v-card-title>
            Добавить задачу
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="newEvent.title"
              label="Название задчи"
              required
            ></v-text-field>
            <v-text-field
              v-model="newEvent.desc"
              label="Описание задачи"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="dialog=false">Отмена</v-btn>
            <v-btn color="blue darken-1" flat @click.stop="newTask">Готово</v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-dialog>
  </div>
</template>

<script src="./scripts.js"></script>

<style lang="scss">
  .__vev_calendar-wrapper .events-wrapper .date {
    -webkit-border-radius: 5px !important;
    -moz-border-radius: 5px !important;
    border-radius: 5px !important;
  }

  .__vev_calendar-wrapper .cal-wrapper .cal-header {
    background-color: transparent;
  }

  .date-num {
    cursor: pointer;
  }

  .task-info {
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }

  .expired {
    color: #f50057 !important;
  }

  .completed {
    color: #00b000 !important;
  }

  .cal-events {
    position: relative;
  }

  .cal-buttons {
    position: absolute;
    width: 98%;
    bottom: 0;
    text-align: center;
  }
</style>