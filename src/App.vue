<template>
	<div id="app">
	  <Header @show-todos="showTodosComponent" @show-post="showPostComponent" />
	  <Post v-if="showPost" @add-post="addPost" />
	  <PostList v-if="showPostList" :posts="posts" />
	  <TodoList v-if="showTodosAdvanced" />
	</div>
  </template>
  
  <script>
  import Header from './components/Header.vue';
  import Post from './components/Post.vue';
  import PostList from './components/PostList.vue';
  import TodoList from './components/TodoList.vue'; // Komponen baru
  
  export default {
  components: {
  Header,
  Post,
  PostList,
  TodoList
  },
  data() {
  return {
  showPost: false,
  showTodosAdvanced: false,
  showPostList: false,
  posts: [],
  };
  },
  methods: {
  showPostComponent() {
  this.showPost = true;
  this.showTodosAdvanced = false;
  this.showPostList = true;
  },
  showTodosComponent() {
  this.showPost = false;
  this.showTodosAdvanced = true;
  this.showPostList = false;
  },
  addPost(post) {
  this.posts.push(post);
  this.showPost = false;
  this.showPostList = true;
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
