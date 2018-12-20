import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
	router, //router:router  es6写法可以写一个
	store,
	render: h => h(App),
}).$mount('#app');
