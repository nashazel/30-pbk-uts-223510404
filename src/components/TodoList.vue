<script setup>
import { ref, onMounted, computed, watch } from 'vue';

const todos = ref([]);
const name = ref('');

const input_content = ref('');
const input_category = ref(null);

const todos_asc = computed(() => todos.value.sort((a, b) => a.createdAt - b.createdAt));

watch(name, (newVal) => {
  localStorage.setItem('name', newVal);
});

watch(todos, (newVal) => {
  localStorage.setItem('todos', JSON.stringify(newVal));
}, {
  deep: true
});

const addTodo = () => {
  if (input_content.value.trim() === '' || input_category.value === null) {
    return;
  }

  todos.value.push({
    content: input_content.value,
    category: input_category.value,
    done: false,
    editable: false,
    createdAt: new Date().getTime()
  });

  input_content.value = '';
  input_category.value = null;
};

const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo);
};

onMounted(() => {
  name.value = localStorage.getItem('name') || '';
  todos.value = JSON.parse(localStorage.getItem('todos')) || [];
});
</script>

<template>
  <main class="app">
    <section class="greeting">
      <h2 class="title">
        What's up, <input type="text" id="name" placeholder="Name here" v-model="name">
      </h2>
    </section>

    <section class="create-todo">
      <h3>CREATE A TODO</h3>

      <form id="new-todo-form" @submit.prevent="addTodo">
        <h4>What's on your todo list?</h4>
        <input
          type="text"
          name="content"
          id="content"
          placeholder="e.g. make a video"
          v-model="input_content" />

        <h4>Pick a category</h4>
        <div class="options">
          <label>
            <input
              type="radio"
              name="category"
              id="category1"
              value="business"
              v-model="input_category" />
            <span class="bubble business"></span>
            <div>Business</div>
          </label>

          <label>
            <input
              type="radio"
              name="category"
              id="category2"
              value="personal"
              v-model="input_category" />
            <span class="bubble personal"></span>
            <div>Personal</div>
          </label>
        </div>

        <input type="submit" value="Add todo" />
      </form>
    </section>

    <section class="todo-list">
      <h3>TODO LIST</h3>
      <div class="list" id="todo-list">
        <div v-for="todo in todos_asc" :key="todo.createdAt" :class="`todo-item ${todo.done ? 'done' : ''}`">
          <label>
            <input type="checkbox" v-model="todo.done" />
            <span :class="`bubble ${
              todo.category == 'business' 
                ? 'business' 
                : 'personal'
            }`"></span>
          </label>

          <div class="todo-content">
            <input type="text" v-model="todo.content" />
          </div>

          <div class="actions">
            <button class="delete" @click="removeTodo(todo)">Delete</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background-color: #eef2f5;
}

.app {
  padding: 2rem;
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.greeting .title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.create-todo, .todo-list {
  width: 100%;
  max-width: 600px;
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
}

.create-todo h3, .todo-list h3 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: #007bff;
}

#create-todo-form h4 {
  margin-bottom: 1rem;
  color: #333;
}

#create-todo-form input[type="text"], 
#create-todo-form input[type="submit"] {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

#create-todo-form input[type="text"]:focus, 
#create-todo-form input[type="submit"]:focus {
  outline: none;
  border-color: #007bff;
}

#create-todo-form input[type="submit"] {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

#create-todo-form input[type="submit"]:hover {
  background-color: #0056b3;
}

.options {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.options label {
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.options label:hover {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.bubble {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}

.business {
  background: #007bff;
}

.personal {
  background: #28a745;
}

.todo-list .list {
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  transition: background-color 0.3s;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.todo-item:hover {
  background-color: #f9f9f9;
}

.todo-item.done .todo-content {
  text-decoration: line-through;
  color: #999;
}

.todo-content {
  flex: 1;
  margin-left: 1rem;
}

.todo-content input {
  width: 100%;
  border: none;
  background: none;
  font-size: 1rem;
  color: #333;
  transition: all 0.3s ease;
}

.todo-content input:focus {
  outline: none;
}

.actions .delete {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.actions .delete:hover {
  background: #c0392b;
}
</style>
