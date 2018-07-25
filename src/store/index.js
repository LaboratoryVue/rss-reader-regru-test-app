import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import axios from 'axios';
import xmlToJson from '../utils/xmlToJson.js';

const state = {
  items: []
};

const mutations = {
  GET_RSS_ITEMS(state, payload) {
    state.items = payload;
  }
};

const actions = {
  getRSS({ commit }) {
    axios
      .get('/feed')
      .then(response => {
        const xml = new DOMParser().parseFromString(response.data, 'application/xml');
        commit('GET_RSS_ITEMS', xmlToJson(xml).rss.channel.item);
        console.log(xmlToJson(xml).rss);
      })
      .catch(e => console.log(e));
  }
};

const getters = {
  getItems(state) {
    return state.items;
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
