<template>
	<div>
	  <h1>Pilih Pengguna:</h1>
	  <select v-model="selectedUser">
		<option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
	  </select>
  
	  <h1>Daftar Postingan Pengguna:</h1>
	  <ul v-if="selectedUser !== null">
		<li v-for="post in userPosts" :key="post.id">
		  <h3>{{ post.title }}</h3>
		  <p>{{ post.body }}</p>
		</li>
	  </ul>
	  <p v-else>Pilih pengguna untuk melihat postingannya.</p>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		users: [],
		selectedUser: null,
		userPosts: []
	  };
	},
	created() {
	  this.fetchUsers();
	},
	watch: {
	  selectedUser: function(newValue) {
		this.fetchUserPosts(newValue);
	  }
	},
	methods: {
	  fetchUsers() {
		fetch('https://jsonplaceholder.typicode.com/users')
		  .then(response => response.json())
		  .then(data => {
			this.users = data;
		  })
		  .catch(error => {
			console.error('Error fetching users:', error);
		  });
	  },
	  fetchUserPosts(userId) {
		fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
		  .then(response => response.json())
		  .then(data => {
			this.userPosts = data;
		  })
		  .catch(error => {
			console.error('Error fetching user posts:', error);
		  });
	  }
	}
  };
  </script>
  
  <style scoped>
  /* Styling can be added here */
  </style>
  