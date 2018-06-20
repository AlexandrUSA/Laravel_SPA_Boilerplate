import { mapActions } from 'vuex';
import Organization from '~/mixins/Organization';

export default {
  middleware: ['auth', 'organisation'],
  mixins: [ Organization ],
  data () {
    return {
      /* Подсказки о результате удаления */
      snackbarShow: false,
      snackbarTimeout: 10000,
      // Поиск / Выборка
      selected: [],
      // Удаление
      delMode: 'single',
      // Заголовки таблицы
      headers: [
        {
          text: 'Имя',
          value: 'first_name'
        },
        {
          text: 'Фамилия',
          value: 'last_name'
        },
        {
          text: 'Должность',
          value: 'position'
        },
        {
          text: 'Подразделение',
          value: 'department'
        },
        {
          text: '',
          sortable: false
        }
      ]
    }
  },
  computed: {
    items() {
      const data = [];
      this.employees.forEach(el => {
        data.push({
          id: el.id,
          first_name: el.first_name,
          last_name: el.last_name || 'Нет данных',
          position: this._getPosition(el.position_id).title || 'Нет данных',
          department: this._getDepartment(el.position_id).title || 'Нет данных'
        })
      });
      return data;
    },
    deleteMsg() {
      return (this.selected.length === 1) ? this.$t('delete_item_confirm') :
        this.$t('delete_items_confirm');
    }
  },
  methods: {
    _getPosition(position_id) {
      return this.positions.find(el => +el.id === +position_id) || {};
    },
    _getDepartment(position_id) {
      const position = this._getPosition(position_id);
      return this.departments.find(el => +el.id === +position.department_id) || {};
    },
    /**
     * Открыть диалог удаления сотрудника
     * @param item
     */
    deleteDialog(item) {
      this.deleteWindow = true;
    },
    /**
     * Удаление сотрудника
     */
    deleteConfirm() {
      this.selected.forEach(el => this.deleteItem(el.id));
      this.selected = [];
      this.deleteWindow = false;
      this.snackbarShow = true;
    },
    /**
     * Отмена удаления
     */
    deleteCancel() {
      this.deleteWindow = false;
    },
    ...mapActions({
      deleteItem: 'employees/remove'
    })
  }
}