<template>
	<div id="app">
	  <Header @show-todos="showTodosComponent" @show-post="showPostComponent" @show-albums="showAlbumsComponent" />
	  <router-view />
	</div>
  </template>
  
  <script>
  import Header from './components/Header.vue';
  
  export default {
	components: {
	  Header
	},
	methods: {
	  showPostComponent() {
		this.$router.push('/post');
	  },
	  showTodosComponent() {
		this.$router.push('/todos');
	  },
	  showAlbumsComponent() {
		this.$router.push('/albums');
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
	margin-top: 20px;
	padding: 0 20px;
  }
  </style>
  