import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import axios from 'axios';
import xmlToJson from '../utils/xmlToJson.js';
// import Parser from 'rss-parser';
// let parser = new Parser();

const state = {
  items: [],
  data: {}
};

const mutations = {
  INIT_RSS_ITEMS(state, payload) {
    let sample = [...payload];
    sample.forEach(el => {
      let picture = null;
      const dummy = document.createElement('html');
      dummy.innerHTML = el.content.trim().slice(0, 200);
      const image = dummy.getElementsByTagName('img')['0'];
      // console.log(dummy.getElementsByTagName('img'));
      if (image) {
        picture = {
          src: image.src,
          // width: image.width,
          // height: image.height,
          className: image.className
        };
      }
      console.log(picture);
    });
    // console.log(sample);
    state.items = payload;
  },
  INIT_DATA(state, payload) {
    state.data = payload;
  }
};

const actions = {
  getRSS({ commit }) {
    axios
      .get('/feed')
      .then(response => {
        // const xml = new DOMParser().parseFromString(response.data, 'application/xml');
        // commit('GET_RSS_ITEMS', xmlToJson(xml).rss.channel.item);
        // console.log(xmlToJson(xml).rss);
        // console.log(parser.parseString(xml));
        // console.log(response.data);
        commit('INIT_DATA', response.data);
        commit('INIT_RSS_ITEMS', response.data.items);
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
