import Vue from 'vue';
import App from './App.vue';
import store from './store/index';

const app = new Vue({
  store,
  render(h) {
    return h(App);
  }
});

app.$mount(document.querySelector('#app'));
