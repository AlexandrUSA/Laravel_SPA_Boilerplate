<template>
  <div id="departments">
    
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
            <v-btn icon class="mx-0" @click="editItem(props.item.id)">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
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

<script>
  import {mapActions, mapGetters} from 'vuex';
  import vueFilePond from 'vue-filepond';
  import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';
  import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';
  // Import styles
  import 'filepond/dist/filepond.min.css';
  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

  const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);


  export default {
    middleware: ['auth', 'organisation'],
    data: () => ({
//      myFiles: ['index.html'],
      // Всплывашки
      snackbarShow: false,
      snackbarTimeout: 10000,
      snackbarMessage: '',
      // Поиск / Выборка
      search: '',
      // Удаление
      deleteIndex: null,
      deleteWindow: false,
      deleteDenied: false,
      //Создание
      departmentCreate: false,
      departmentName: '',
      // Заголовки таблицы
      headers: [{
        text: 'Номер',
        align: 'left',
        sortable: false
      },
        {
          text: 'Наименование',
          value: 'name'
        },
        {
          text: 'Должностей',
          value: 'positions'
        },
        {
          text: 'Сотрудников',
          value: 'employees'
        },
        {
          text: 'Действия',
          value: 'action'
        }
      ]
    }),
    computed: {
      items() {
        const data = [];
        this.departments.forEach(el => {
          data.push({
            id: el.id,
            title: el.title,
            positions: this._getPositions(el.id).length,
            employees: this._getEmployees(el.id).length
          })
        })
        return data;
      },
      deleteMsg() {
        return (this.deleteDenied) ? 'За данным отлелом закреплены сотрудники' :
          'Вы действительно хотите расформировать данный отдел?';
      },
      ...mapGetters({
        departments: 'departments/departments',
        positions: 'positions/positions',
        employees: 'employees/employees'
      })
    },
//    components: {
//        FilePond
//    },
    methods: {
//      handleFilePondInit: function() {
//        console.log('FilePond has initialized');
//        this.$refs.pond.getFiles();
//      },
      _getPositions(id) {
        let positions = [];
        this.positions.forEach(el => {
          if (+el.department_id === +id) positions.push(el);
        });
        return positions;
      },
      _getEmployees(id) {
        let employees = [],
            positions = this._getPositions(id);
        positions.forEach(pos => {
          this.employees.forEach(el => {
            if (+el.position_id === +pos.id) employees.push(el);
          });
        });
        return employees;
      },
      addConfirm() {
        this.addItem({
          'title': this.departmentName
        });
        this.departmentCreate = false;
        this.snackbarShow = true;
        this.snackbarMessage = $t('delete_done');
      },
      addCancel() {
        this.departmentCreate = false;
      },
      _hasEmployees(id) {
        return this._getEmployees(id).length
      },
      deleteItem(id) {
        this.deleteWindow = true;
        if (this._hasEmployees(id)) {
          this.deleteDenied = true;
        } else {
          this.deleteIndex = id;
          this.deleteDenied = false;
        }
      },
      deleteConfirm() {
        this.deleteWindow = false;
        this.remove(this.deleteIndex)
        this.deleteIndex = null
        this.snackbarShow = true
        this.snackbarMessage = this.$t('add_done')
      },
      deleteCancel() {
        this.deleteWindow = false;
        this.deleteIndex = null
      },
      ...mapActions({
        loadItems: 'departments/load',
        addItem: 'departments/add',
        editItem: 'departments/edit',
        remove: 'departments/remove'
      })
    }
  }

</script>

<style scoped>
  #departments {
    position: relative;
    width: 90%;
    max-width: 1000px;
    margin: 10px auto;
  }

  .mb-2.btn {
    position: absolute;
    bottom: 0;
    z-index: 2;
  }
  
  span {
    cursor: pointer;
  }

</style>
