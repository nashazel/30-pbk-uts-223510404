<template>
	<div class="photo-list">
	  <h2>Photos in Album</h2>
	  <div v-if="photos.length === 0" class="loading">Loading photos...</div>
	  <div class="photos">
		<div v-for="photo in photos" :key="photo.id" class="photo-item">
		  <img :src="photo.thumbnailUrl" @click="showFullSize(photo.url)" />
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
	data() {
	  return {
		photos: []
	  };
	},
	created() {
	  const albumId = this.$route.params.id;
	  axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
		.then(response => {
		  this.photos = response.data;
		})
		.catch(error => {
		  console.error('There was an error fetching the photos!', error);
		});
	},
	methods: {
	  showFullSize(url) {
		window.open(url, '_blank');
	  }
	}
  }
  </script>
  
  <style scoped>
  .photo-list {
	padding: 1rem;
	max-width: 800px;
	margin: 1rem auto;
	background: #f9f9f9;
	border: 1px solid #ccc;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .photo-list h2 {
	font-size: 2rem;
	margin-bottom: 1rem;
  }
  .loading {
	font-size: 1.2rem;
	color: #999;
	text-align: center;
  }
  .photos {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
  }
  .photo-item {
	margin: 10px;
	cursor: pointer;
	border: 1px solid #ccc;
	padding: 5px;
	border-radius: 10px;
	transition: transform 0.3s;
	background: white;
  }
  .photo-item:hover {
	transform: scale(1.05);
  }
  .photo-item img {
	max-width: 150px;
	max-height: 150px;
	border-radius: 5px;
  }
  </style>
  