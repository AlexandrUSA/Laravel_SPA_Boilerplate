<template>
  <div id="positions">
    <v-dialog v-model="deleteAlert" max-width="800px">
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
          <v-btn color="blue darken-1" flat @click.native="deleteAlert = !deleteAlert">Отмена</v-btn>
          <v-btn v-show="!deleteDenied" color="blue darken-1" flat @click.native="deleteConfirm">Удалить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" max-width="500px">
      <v-btn color="primary" dark slot="activator" class="mb-2">Добавить должность</v-btn>
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
                  v-model="editedItem.department_id"
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
            <v-btn icon class="mx-0" @click="editItem(props.item)">
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

<script>
  import {mapGetters, mapActions} from 'vuex';


  export default {
    middleware: ['auth', 'organisation'],
    props: {
      searchProp: {
        type: String,
        default: ''
      }
    },
    data: () => ({
      search: '',
      dialog: false,
      deleteAlert: false,
      deleteDenied: false,
      headers: [
        {
          text: 'Номер',
          align: 'right',
          sortable: false,
          value: 'id'
        },
        {text: 'Наименование', align: 'right', value: 'title'},
        {text: 'Подразделение', align: 'right', value: 'department'},
        {text: 'Сотрудников', align: 'right', value: 'employees'},
        {text: 'Действия', align: 'right', value: 'title', sortable: false}
      ],
      editedIndex: -1,
      editedItem: {
        id: '',
        title: '',
        department_id: '',
      },
      defaultItem: {
        id: '',
        title: '',
        department_id: '',
      }
    }),
    computed: {
      items() {
        const data = [];
        this.positions.forEach(el => {
          data.push({
            id: el.id,
            title: el.title,
            last_name: el.last_name,
            department: this.getDepartmentName(el.department_id),
            employees: this.getPositionEmployees(el.id).length
          })
        });
        return data;
      },
      ...mapGetters({
        positions: 'positions/positions',
        departments: 'departments/departments',
        employees: 'employees/employees'
      }),
      deleteMsg() {
        return (this.deleteDenied) ? ' За данной должностью закреплены сотрудники. Пожалуйста, распределите их на другие должности прежде чем удалять текущую.' :
          ' Вы действительно хотите удалить данную должность?';
      },
      formTitle() {
        return this.editedIndex === -1 ? 'Новая должность' : 'Изменить должность'
      }
    },
    watch: {
      dialog(val) {
        val || this.close()
      }
    },
    methods: {
      ...mapActions({
        add: 'positions/add',
        update: 'positions/edit',
        remove: 'positions/remove'
      }),
      getDepartmentName(id) {
        return this.departments.find(el => el.id == id).title
      },
      getPositionEmployees(id) {
        return this.employees.filter(el => el.position_id == id)
      },
      editItem(item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem(item) {
        this.deleteAlert = true;
        if (this.getPositionEmployees(item.id).length) {
          this.deleteDenied = true;
        } else {
          this.deleteDenied = false;
          this.editedIndex = item.id;
        }
      },
      deleteConfirm() {
        this.remove(this.editedIndex);
        this.deleteAlert = false;
        this.editedIndex = -1;
      },
      close() {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save() {
        if (this.editedIndex > -1) {
          this.update(this.editedItem)
        } else {
          this.add(this.editedItem);
        }
        this.close()
      }
    },
    created() {
      if (this.searchProp) this.search = this.searchProp
    }
  }
</script>

<style scoped>
  #positions {
    position: relative;
    max-width: 90%;
    margin: 10px auto;
  }
  
  .mb-2.btn {
    position: absolute;
    bottom: -50px;
  }
  
  .card__title.t-head {
    padding: 0 15px;
  }

  span {
    cursor: pointer;
  }

</style>