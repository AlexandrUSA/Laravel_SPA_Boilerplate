export default {
  data () {
    return {
      selectedDay: null, // Add state to store selected day
      todos: [
        {
          id: 1,
          description: 'Clean the house.',
          date: new Date(),
          isCompleted: false,
          color: 'red'
        }
      ]
    }
  },
  computed: {
    attributes () {
      return this.todos.map(t => ({
        key: `todo.${t.id}`,
        dot: {
          backgroundColor: t.color
        },
        dates: t.date,
        customData: t
      }))
    }
  },
  methods: {
    dayClicked (day) {
      this.selectedDay = day
    }
  }
}
