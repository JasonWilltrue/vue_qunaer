/*
 * @Author      : Jerrychan
 * @Date        : 2018-12-20 00: 11: 48
 * @LastEditors : Jerrychan
 * @LastEditTime: 2019-01-03 22: 10: 21
 * @Description : 入口文件
 */

import Vue from 'vue';
import App from './App';
import router from './router/router.js';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import store from './store';     //引入store
import fastClick from 'fastclick'; //移动端300ms点击延迟问题解决方案
import './assets/styles/reset.css'; //初始化css样式
import './assets/styles/border.css'; //解决部分高分辨率手机1px像素边距问题
import './assets/iconfont/iconfont.css';
import 'swiper/dist/css/swiper.css';
Vue.config.productionTip = false;
//绑定到根节点上
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template  : '<App/>',
});
