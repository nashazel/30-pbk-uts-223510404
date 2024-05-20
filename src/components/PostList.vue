<template>
	<div class="post-list">
	  <h2>User Posts</h2>
	  <div v-if="posts.length === 0">No posts yet.</div>
	  <div v-for="post in posts" :key="post.createdAt" class="post-item">
		<h3>{{ post.title }}</h3>
		<p>{{ post.content }}</p>
		<small>{{ new Date(post.createdAt).toLocaleString() }}</small>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	props: {
	  posts: {
		type: Array,
		required: true
	  }
	}
  }
  </script>
  
  <style scoped>
  .post-list {
	padding: 1rem;
  }
  .post-item {
	border-bottom: 1px solid #ccc;
	margin-bottom: 1rem;
	padding-bottom: 1rem;
  }
  </style>
  