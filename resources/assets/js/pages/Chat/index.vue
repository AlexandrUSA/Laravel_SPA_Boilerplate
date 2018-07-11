<template>
  <v-container class="chat-section">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h2>Чат</h2>
          </v-card-title>
          <v-card-text class="messages">
            <v-list two-line>
              <template v-for="(item, index) in messages">
                <v-list-tile
                  :key="item.message.id"
                  ripple
                  @click="insertName(item.user)"
                >
                  <v-list-tile-avatar>
                    <img :src="getAvatar(item.user.avatar)">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ `${item.user.last_name} ${item.user.name[0]}.` }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.message.message }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card-text>
          <v-card-text>
            <v-textarea
              v-model="message"
              name="message-editor"
              label="Введите сообщение"
              ref="text"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info" large block
                   @click="sendMessage"
                   :disabled="!message"
                   :loading="loading">Отправить</v-btn>
          </v-card-actions>
          <v-snackbar
            v-model="snackbar"
            :timeout="snackbarTimeout"
            :top="true"
          >
            {{ snackbarMessage }}
            <v-btn
              color="pink"
              flat
              @click="snackbar = false"
            >
              {{ $t('ok') }}
            </v-btn>
          </v-snackbar>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src="./scripts.js"></script>

<style lang="scss" scoped>
  .chat-section {
    position: relative;
    width: 90%;
    max-width: 1200px;
    margin: 10px auto;
  }

  .messages {
    min-height: calc(100vh - 500px);
  }

  .v-card__title {
    justify-content: center;
  }
</style>