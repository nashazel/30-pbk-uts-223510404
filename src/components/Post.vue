<template>
	<div class="post">
	  <h2>Add a New Post</h2>
	  <form @submit.prevent="submitPost">
		<div>
		  <label for="title">Title</label>
		  <input type="text" v-model="title" id="title" required />
		</div>
		<div>
		  <label for="content">Content</label>
		  <textarea v-model="content" id="content" required></textarea>
		</div>
		<button type="submit">Add Post</button>
	  </form>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		title: '',
		content: ''
	  };
	},
	methods: {
	  submitPost() {
		if (this.title && this.content) {
		  this.$emit('add-post', {
			title: this.title,
			content: this.content,
			createdAt: new Date().getTime()
		  });
		  this.title = '';
		  this.content = '';
		}
	  }
	}
  }
  </script>
  
  <style scoped>
  .post {
	padding: 1rem;
	background: #f9f9f9;
	border: 1px solid #ccc;
	margin-top: 1rem;
	text-align: left;
  }
  form div {
	margin-bottom: 1rem;
  }
  label {
	display: block;
	margin-bottom: 0.5rem;
  }
  input, textarea {
	width: 100%;
	padding: 0.5rem;
	border: 1px solid #ccc;
  }
  button {
	padding: 0.5rem 1rem;
	background: #333;
	color: white;
	border: none;
	cursor: pointer;
  }
  </style>
  