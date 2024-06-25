import { createRouter, createWebHistory } from 'vue-router';
import TodoList from './components/TodoList.vue';
import Post from './components/Post.vue';
import AlbumList from './components/AlbumList.vue';
import PhotoList from './components/PhotoList.vue';

const routes = [
  { path: '/todos', component: TodoList },
  { path: '/post', component: Post },
  { path: '/albums', component: AlbumList },
  { path: '/albums/:id', component: PhotoList }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
