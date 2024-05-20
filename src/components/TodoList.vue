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
        <div v-for="todo in todos_asc" :key="todo.createdAt" :class="`todo-item ${todo.done && 'done'}`">
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
.app {
  padding: 1rem;
}

.greeting .title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.create-todo, .todo-list {
  margin-top: 2rem;
}

.create-todo h3, .todo-list h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

#new-todo-form h4 {
  margin-bottom: 0.5rem;
}

#new-todo-form input[type="text"], 
#new-todo-form input[type="submit"] {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.options {
  display: flex;
  justify-content: space-around;
}

.options label {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.bubble {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.5rem;
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
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
}

.todo-item.done .todo-content {
  text-decoration: line-through;
  color: #999;
}

.actions .delete {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
}
</style>
