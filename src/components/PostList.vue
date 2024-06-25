<template>
	<div class="post-list">
	  <h2>User Posts</h2>
	  <div v-if="posts.length === 0" class="no-posts">No posts yet.</div>
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
	max-width: 800px;
	margin: 1rem auto;
  }
  .no-posts {
	text-align: center;
	font-size: 1.2rem;
	color: #999;
  }
  .post-item {
	background: #f9f9f9;
	border: 1px solid #ccc;
	border-radius: 10px;
	margin-bottom: 1rem;
	padding: 1rem;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .post-item h3 {
	margin-top: 0;
  }
  </style>
  