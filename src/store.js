import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rss: null
  },
  mutations: {
    GET_RSS(state) {
      const config = {
        method: 'HEAD',
        mode: 'no-cors',
        credentials: 'same-origin',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
          Accept: 'application/rss+xml',
          'Content-Type': 'application/rss+xml'
        }
      };
      axios
        .get('https://www.reg.ru/company/news/rss', config)
        .then(response => console.log(response))
        .catch(e => console.log(e));
    },
    FETCH_DATA() {
      const URL = 'https://www.reg.ru/company/news/rss';
      const config = {
        method: 'HEAD',
        mode: 'no-cors'
      };
      const rssRequest = new Request(URL, config);
      fetch(rssRequest)
        .then(response => response)
        .then(result => console.log(result))
        .catch(e => console.log(e));
    }
  },
  actions: {
    getRSS({ commit }) {
      commit('GET_RSS');
    },
    fetchData({ commit }) {
      commit('FETCH_DATA');
    }
  }
});
