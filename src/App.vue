<template>
  <div id="app">
    <h1>Pohod v mazagin</h1>
    <additemS @add-todo="addTodo" />
    <Super :todos="todos" @remove-todo="removeTodo" />
  </div>
</template>

<script>
import Super from './components/Super.vue';
import additemS from './components/additemS.vue';
export default {
  name: 'App',
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => { this.todos = json })
  },
  components: {
    Super, additemS
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
