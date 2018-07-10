import { mapActions } from 'vuex'
import Organization from '~/mixins/Organization'

const RUS = ['Я', 'я', 'Ю', 'ю', 'Ч', 'ч', 'Ш', 'ш', 'Щ', 'щ', 'Ж', 'ж', 'А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Д', 'д', 'Е', 'е', 'Ё', 'ё', 'З', 'з', 'И', 'и', 'Й', 'й', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Р', 'р', 'С', 'с', 'Т', 'т', 'У', 'у', 'Ф', 'ф', 'Х', 'х', 'Ц', 'ц', 'Ы', 'ы', 'Ь', 'ь', 'Ъ', 'ъ', 'Э', 'э']
const ENG = ['Ya', 'ya', 'Yu', 'yu', 'Ch', 'ch', 'Sh', 'sh', 'Sh', 'sh', 'Zh', 'zh', 'A', 'a', 'B', 'b', 'V', 'v', 'G', 'g', 'D', 'd', 'E', 'e', 'E', 'e', 'Z', 'z', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'F', 'f', 'H', 'h', 'C', 'c', 'Y', 'y', '`', '`', '\'', '\'', 'E', 'e']

export default {
  middleware: ['auth', 'organisation'],
  mixins: [Organization],
  metaInfo () {
    return { title: this.$t('positions') }
  },
  data () {
    return {
      // Диалог создания новой профессии
      dialog: false,
      deleteDenied: false,
      // Заголовки таблицы
      headers: [
        {text: 'Номер', align: 'right', sortable: false, value: 'id'},
        {text: 'Наименование', align: 'right', value: 'display_name'},
        {text: 'Подразделение', align: 'right', value: 'department'},
        {text: 'Сотрудников', align: 'right', value: 'employees'},
        {text: 'Действия', align: 'right', value: 'title', sortable: false}
      ],
      // Изменение профессии
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
        display_name: '',
        description: '',
        department_id: 0,
        permissionsList: []
      },
      // Для возврата к дефолтным значениям
      defaultItem: {
        id: '',
        name: '',
        display_name: '',
        description: '',
        department_id: 0,
        permissionsList: []
      }
    }
  },
  computed: {
    items () {
      const data = []
      this.positions.forEach(el => {
        data.push({
          ...el,
          department: this.getDepartment(el.department_id)
        })
      })
      return data
    },
    deleteMsg () {
      return (this.deleteDenied) ? ' За данной должностью закреплены сотрудники. Пожалуйста, распределите их на другие должности прежде чем удалять текущую.' : ' Вы действительно хотите удалить данную должность?'
    },
    formTitle () {
      return this.editedIndex === -1 ? 'Новая должность' : 'Изменить должность'
    }
  },
  watch: {
    'editedItem.display_name' () {
      let output = this.editedItem.display_name
      for (let i = 0; i < RUS.length; i++) {
        let reg = new RegExp(RUS[i], 'g')
        output = output.replace(reg, ENG[i])
      }
      this.editedItem.name = output.split(' ').join('.').toLowerCase()
    },
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    ...mapActions({
      add: 'positions/add',
      update: 'positions/edit',
      remove: 'positions/remove'
    }),
    getDepartment (departmentID) {
      const department = this.departments.find(el => +el.id === +departmentID)
      return (department) ? department.title : 'Нет данных'
    },
    editItem (id) {
      const item = this.positions.find(el => +el.id === +id)
      this.editedItem = Object.assign({}, item)
      this.editedItem.department_id = +item.department_id
      this.editedItem.permissionsList = item.permissionsList.map(el => el.id || el)
      this.editedIndex = item.id
      this.dialog = true
    },
    deleteItem (item) {
      this.deleteWindow = true
      if (item.users.length) {
        this.deleteDenied = true
      } else {
        this.deleteDenied = false
        this.editedIndex = item.id
      }
    },
    deleteConfirm () {
      this.remove(this.editedIndex)
      this.deleteWindow = false
      this.editedIndex = -1
    },
    /**
     * Закрываем диалог изменения / добавления должности
     */
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    /**
     * Функция сохранения / добавления новой должности
     */
    save () {
      if (this.editedIndex > -1) {
        this.update(this.editedItem)
      } else {
        this.add(this.editedItem)
      }
      this.close()
    }
  }
}
