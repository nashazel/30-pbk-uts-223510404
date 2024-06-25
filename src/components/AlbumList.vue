<template>
	<div class="album-list">
	  <h2>Albums</h2>
	  <div v-if="albums.length === 0" class="loading">Loading albums...</div>
	  <ul>
		<li v-for="album in albums" :key="album.id">
		  <router-link :to="`/albums/${album.id}`">{{ album.title }}</router-link>
		</li>
	  </ul>
	</div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
	data() {
	  return {
		albums: []
	  };
	},
	created() {
	  axios.get('https://jsonplaceholder.typicode.com/albums')
		.then(response => {
		  this.albums = response.data;
		})
		.catch(error => {
		  console.error('There was an error fetching the albums!', error);
		});
	}
  }
  </script>
  
  <style scoped>
  .album-list {
	padding: 1rem;
	max-width: 800px;
	margin: 1rem auto;
	background: #f9f9f9;
	border: 1px solid #ccc;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .album-list h2 {
	font-family: Poppins;
	font-size: 2rem;
	margin-bottom: 1rem;
  }
  .loading {
	font-family: Poppins;
	font-size: 1.2rem;
	color: #999;
	text-align: center;
  }
  ul {
	list-style-type: none;
	padding: 0;
  }
  li {
	margin-bottom: 1rem;
  }
  li a {
	text-decoration: none;
	color: #007bff;
	font-size: 1.2rem;
	transition: color 0.3s;
  }
  li a:hover {
	color: #0056b3;
  }
  </style>
  