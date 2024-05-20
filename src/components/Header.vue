Komponen header untuk menampilkan tombol navigasi antara "Todos" dan "Post".

```vue
<template>
  <header>
    <button @click="$emit('show-todos')">Todos</button>
    <button @click="$emit('show-post')">Post</button>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
button {
  padding: 10px 20px;
  margin: 0 10px;
  background: #333;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background: #555;
}
</style>