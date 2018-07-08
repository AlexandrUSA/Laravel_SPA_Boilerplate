<template>
  <v-list dense>
    <v-list-group>
      <v-list-tile avatar slot="activator" ripple>
        <v-list-tile-avatar>
          <img :src="avatar">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ user.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile :to="{name: 'settings'}">
        <v-list-tile-action>
          <fa icon="user"/>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ $t('profile') }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile :to="{name: 'AppSettings'}">
        <v-list-tile-action>
          <fa icon="cog"/>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ $t('settings') }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-group>
    <v-divider></v-divider>
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
    computed: {
      initialItems () {
        return [
          {icon: 'home', text: this.$t('nav-main'), to: {name: 'home'}, permissions: false},
          {
            icon: 'account_balance',
            // 'append-icon': 'users',
            text: this.$t('nav-organization'),
            model: false,
            permissions: 'crud-employee',
            children: [
              {icon: 'address-card', text: this.$t('employees'), to: {name: 'employees'}},
              {icon: 'sitemap', text: this.$t('departments'), to: {name: 'departments'}},
              {icon: 'briefcase', text: this.$t('positions'), to: {name: 'positions'}}
            ]
          },
          {icon: 'dollar-sign', text: this.$t('nav-balance'), to: {name: 'balance'}, permissions: 'finance-actions'},
          {icon: 'users', text: this.$t('nav-clients'), to: {name: 'clients'}, permissions: 'crud-clients'},
          {icon: 'plane', text: this.$t('nav-tours'), to: {name: 'tours'}, permissions: 'crud-tours'},
          {icon: 'briefcase', text: this.$t('nav-vouchers'), to: {name: 'vouchers'}, permissions: 'crud-tours'},
          {icon: 'calendar', text: this.$t('nav-calendar'), to: {name: 'calendar'}},
          {icon: 'comments', text: this.$t('nav-chat'), to: {name: 'chat'}},
          {icon: 'envelope', text: this.$t('nav-email'), to: {name: 'messages'}},
          {icon: 'question-circle', text: this.$t('nav-help'), to: {name: 'help'}}
        ]
      },
      items () {
        return this.initialItems.filter(el => {
          if (el.permissions) {
            return this.user.permissions.indexOf(el.permissions) !== -1
          }
          return true
        })
      },
      avatar() {
        return (this.user.avatar) ? this.user.avatar : "/storage/avatars/no-avatar.jpg"
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