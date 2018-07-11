<template>
  <div class="calendar">
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex xs12>
          <v-card>
            <v-card-title>События</v-card-title>
            <v-card-text>
              <vue-event-calendar :events="events"
                                  @day-changed="handleDayChanged">
              </vue-event-calendar>
            </v-card-text>
            <v-card-actions>
              <v-btn block large
                     @click="createDialog = true"
              >
                Добавить задачу
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <!--  Диалог создания нового задания  -->
      <v-dialog v-model="createDialog" max-width="500px">
          <v-card>
            <v-card-title>
              <h2>Добавить задачу</h2>
            </v-card-title>
            <v-card-text>
              <v-text-field
                v-model="newEvent.title"
                label="Название задачи"
                required
                clearable
              ></v-text-field>
              <v-text-field
                v-model="newEvent.desc"
                label="Описание задачи"
                clearable
              ></v-text-field>
              <v-menu
                ref="menu"
                lazy
                :close-on-content-click="false"
                v-model="dateSelectMenu"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-right="40"
                min-width="290px"
                :return-value.sync="newEvent.date"
              >
                <v-text-field
                  slot="activator"
                  :label="$t('expiry')"
                  v-model="newEvent.date"
                  prepend-icon="event"
                  readonly
                  required
                  clearable
                ></v-text-field>
                <v-date-picker v-model="newEvent.date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary"
                         @click="dateSelectMenu = false">
                    {{ $t('cancel') }}
                  </v-btn>
                  <v-btn flat color="primary"
                         @click="$refs.menu.save(newEvent.date)">
                    {{ $t('ok') }}
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" flat
                     @click.stop="createDialog = false">{{ $t('cancel') }}</v-btn>
              <v-btn color="blue darken-1" flat
                     @click.stop="newTask"
                     :disabled="!valid">{{ $t('ok') }}</v-btn>
            </v-card-actions>
          </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script src="./scripts.js"></script>

<style lang="scss">
  .__vev_calendar-wrapper .events-wrapper .date {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
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

  .event-expired p {
    color: #f50057 !important;
    border-color: #f50057 !important;
  }

  .completed {
    color: #00b000 !important;
  }

  .cal-wrapper {
    background-color: #303030;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
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