import { mapActions } from 'vuex';
import Organization from '~/mixins/Organization';

export default {
  middleware: ['auth', 'organisation'],
  mixins: [ Organization ],
  data () {
    return {
      // Диалог создания новой профессии
      dialog: false,
      deleteDenied: false,
      // Заголовки таблицы
      headers: [
        { text: 'Номер', align: 'right', sortable: false, value: 'id' },
        { text: 'Наименование', align: 'right', value: 'title' },
        { text: 'Подразделение', align: 'right', value: 'department' },
        { text: 'Сотрудников', align: 'right', value: 'employees' },
        { text: 'Действия', align: 'right', value: 'title', sortable: false }
      ],
      // Изменение профессии
      editedIndex: -1,
      editedItem: {
        id: '',
        title: '',
        department_id: '',
      },
      // Для возврата к дефолтным значениям
      defaultItem: {
        id: '',
        title: '',
        department_id: '',
      }
    }
  },
  computed: {
    items () {
      const data = [];
      this.positions.forEach(el => {
        data.push({
          ...el,
          department: this.getDepartment(el.department_id),
          employees: this.getPositionEmployees(el.id).length
        })
      });
      return data;
    },
    deleteMsg () {
      return (this.deleteDenied) ? ' За данной должностью закреплены сотрудники. Пожалуйста, распределите их на другие должности прежде чем удалять текущую.' :
        ' Вы действительно хотите удалить данную должность?';
    },
    formTitle () {
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
    getDepartment (department_id) {
      const department = this.departments.find(el => +el.id === +department_id);
      return (department) ? department.title : 'Нет данных';
    },
    getPositionEmployees (id) {
      const employees = this.employees.filter(el => +el.position_id === +id);
      return (employees) ? employees : 'Нет данных';
    },
    editItem (id) {
      const item = this.positions.find(el => +el.id === +id);
      this.editedItem = Object.assign({}, item);
      this.editedIndex = item.id;
      this.dialog = true;
    },
    deleteItem (item) {
      this.deleteWindow = true;
      if (this.getPositionEmployees(item.id).length) {
        this.deleteDenied = true;
      } else {
        this.deleteDenied = false;
        this.editedIndex = item.id;
      }
    },
    deleteConfirm () {
      this.remove(this.editedIndex);
      this.deleteWindow = false;
      this.editedIndex = -1;
    },
    /**
     * Закрываем диалог изменения / добавления должности
     */
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1
      }, 300)
    },
    /**
     * Функция сохранения / добавления новой должности
     */
    save() {
      if (this.editedIndex > -1) {
        this.update(this.editedItem)
      } else {
        this.add(this.editedItem);
      }
      this.close()
    }
  }
}