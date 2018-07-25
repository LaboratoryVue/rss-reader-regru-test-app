import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

const state = {
  items: [],
  data: {}
};

const mutations = {
  // INIT RSS ITEMS
  INIT_RSS_ITEMS(state, payload) {
    const sample = [...payload];
    sample.forEach(el => {
      // => check and add classes
      let picture = {};
      const dummy = document.createElement('html');
      dummy.innerHTML = el.content.trim().slice(0, 1000);
      const image = dummy.getElementsByTagName('img')['0'];
      if (image == null) {
        picture.className = '';
        picture.src = '';
      } else {
        if (image.className == '') {
          picture.className = 'b-news-article__center';
        } else {
          picture.className = image.className;
        }
        picture.src = image.src;
      }
      // => clean and reorder object
      delete el.content;
      el.title = el.title.trim();
      el.picture = picture;
    });
    // => init state items
    state.items = sample;
  },
  // INIT DATA
  INIT_DATA(state, payload) {
    state.data = payload;
  }
};

const actions = {
  getRSS({ commit }) {
    axios
      .get('/feed')
      .then(response => {
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
