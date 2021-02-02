import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Lemon from './components/Lemon.vue';
import Lemon2 from './components/Lemon2.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Lemon},
    {path: '/xxx', component: Lemon2},
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
