import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/pages/home/Home.vue';
// import About from '@/pages/about/About.vue';
// import City from '@/pages/city/City.vue';
// import Detail from '@/pages/detail/Detail.vue';
Vue.use(Router);

export default new Router({
  mode  : 'history',
  base  : process.env.BASE_URL,
  routes: [
    {
      path     : '/',
      name     : 'home',
      component: ()=>import('../pages/home/Home'),
    },
    {
      path     : '/city',
      name     : 'City',
      component: ()=>import('../pages/city/City'),
    },
    {
      path     : '/detail/:id',
      name     : 'Detail',
      component: ()=>import('../pages/detail/Detail'),
    },
    {
      path     : '/about',
      name     : 'About',
      component: ()=>import('../pages/about/About'),

    }],
    // 每次切换页面重新回到最顶部
  scrollBehavior (to, from, savedPosition) {
   return { x: 0, y: 0 }
 }
});
