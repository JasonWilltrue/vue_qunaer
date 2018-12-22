/*
 * @Author: Jerrychan
 * @Date: 2018-12-20 00:11:48
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-12-22 00:57:40
 * @Description: 入口文件
 */

import Vue from 'vue';
import Home from './pages/home/Home.vue';
import router from './router/router';
// import store from './store';
import fastClick from 'fastclick'; //移动端300ms点击延迟问题解决方案
import './assets/styles/reset.css'; //初始化css样式
import './assets/styles/border.css'; //解决部分高分辨率手机1px像素边距问题

Vue.config.productionTip = false;
//绑定到根节点上
fastClick.attach(document.body);

new Vue({
	router, //router:router  es6写法可以写一个
	render: h => h(Home),
}).$mount('#app');
