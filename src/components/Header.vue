<template>
	<header>
	  <button @click="$emit('show-todos')">Todos</button>
	  <button @click="$emit('show-post')">Post</button>
	  <button @click="$emit('show-albums')">Albums</button>
	</header>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
  header {
	font-family: Poppins;
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
	background: #333;
	padding: 15px;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  button {
	font-family: Poppins;
	padding: 10px 20px;
	margin: 0 10px;
	background: #007bff;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background 0.3s;
  }
  button:hover {
	background: #0056b3;
  }
  </style>
  