/*
 * @Author: Jerrychan
 * @Date: 2018-12-20 00:11:48
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-12-21 00:32:17
 * @Description: 入口文件
 */

import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
// import store from './store';
import fastClick from 'fastclick'; //移动端300ms点击延迟问题解决方案
import './assets/styles/reset.css';
import './assets/styles/border.css';

Vue.config.productionTip = false;
//绑定到根节点上
fastClick.attach(document.body);

new Vue({
	router, //router:router  es6写法可以写一个
	render: h => h(App),
}).$mount('#app');
