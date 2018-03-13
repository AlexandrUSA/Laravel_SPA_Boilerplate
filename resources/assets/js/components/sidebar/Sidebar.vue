<template>
  <v-list dense>
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.icon"
          >
            <v-list-tile slot="activator" ripple>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
              ripple
              :to="child.to"
            >
              <v-list-tile-action v-if="child.icon">
                <fa :icon="child.icon"/>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="" :key="item.text" ripple :to="item.to">
            <v-list-tile-action>
              <fa :icon="item.icon"/>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
</template>

<script>
	export default {
    props: {
      user: {
        type: [Object],
        required: true
      }
    },
    data() {
      return {
        items: [
        { icon: 'home', text: 'Главная', to: {name: 'home'} },
        {
          icon: 'account_balance',
          // 'append-icon': 'users',
          text: 'Организация',
          model: false,
          children: [
            { icon: 'address-card', text: 'Сотрудники', to: {name: 'employees'} },
            { icon: 'sitemap', text: 'Отделы', to: {name: 'departments'} },
            { icon: 'briefcase', text: 'Должности', to: {name: 'positions'} }
          ]
        },
        { icon: 'users', text: 'Клиенты', to: {name: 'clients'} },
        { icon: 'plane', text: 'Туры', to: {name: 'clients'} },
        { icon: 'address-book', text: 'Поставщики', to: {name: 'clients'} },
        { icon: 'calendar', text: 'Календарь', to: {name: 'clients'} },
        { icon: 'comments', text: 'Сообщения', to: {name: 'messages'} },
        { icon: 'question-circle', text: 'Помощь', to: {name: 'helpers'} }
      ]
      }
    }
  }
</script>

<style scoped>
  .svg-inline--fa {
    font-size: 1.3rem;
  }

  .list__group .svg-inline--fa {
    position: relative;
    right: -15px;
    font-size: 1.1rem;
  }
</style>