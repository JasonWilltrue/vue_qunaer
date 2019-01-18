import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home.vue';
import About from '@/pages/about/About.vue';
import City from '@/pages/city/City.vue';
import Detail from '@/pages/detail/Detail.vue';
Vue.use(Router);

export default new Router({
  mode  : 'history',
  base  : process.env.BASE_URL,
  routes: [
    {
      path     : '/',
      name     : 'home',
      component: Home,
    },
    {
      path     : '/city',
      name     : 'City',
      component: City,
    },
    {
      path     : '/detail/:id',
      name     : 'Detail',
      component: Detail,
    },
    {
      path     : '/about',
      name     : 'about',
      component: About,
      // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
  ],
});
