import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: JSON.parse(localStorage.getItem('todos')) || [{ name: 'Выполнить тестовое задание', id: 1, complete: true }]
  },
  mutations: {
    createTodo(state, todo) {
      state.todos.unshift(todo)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    removeTodo(state, id) {
      let idx = state.todos.findIndex(todo => todo.id === id)
      state.todos.splice(idx, 1)
      localStorage.setItem('todos', JSON.stringify(state.todos))

    },
    completeTodo(state, id) {
      let idx = state.todos.findIndex(todo => todo.id === id)
      state.todos.[idx].complete = !state.todos.[idx].complete
      localStorage.setItem('todos', JSON.stringify(state.todos))

    },
    updateTodo(state, todo) {
      const idx = state.todos.findIndex(c => c.id === todo.id)

      state.todos[idx] = todo

      localStorage.setItem('todos', JSON.stringify(state.todos))

    },
  },
  actions: {
    createTodo({ commit }, todo) {
      commit('createTodo', todo)
    },
    removeTodo({ commit }, id) {
      commit('removeTodo', id)
    },
    completeTodo({ commit }, id) {
      commit('completeTodo', id)
    },
    updateTodo({ commit }, todo) {
      commit('updateTodo', todo)
    },
  },
  modules: {
  },
  getters: {
    todos: s => s.todos,
    getTodoById: s => id => s.todos.find(t => t.id === id)
  }
})
