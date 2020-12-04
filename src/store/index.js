import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{},	screenWidth: window.innerWidth,	screenHeight: window.innerHeight,
  },
  getters:{
    getUserInfo:state=>state.userInfo,	vw: (state) => state.screenWidth / 100,	vh: (state) => state.screenHeight / 100,	getScreenWidth: (state) => state.screenWidth,	getScreenHeight: (state) => state.screenHeight,	getVw: (state) => (n) => state.screenWidth / 1920 * n,	getVh: (state) => (n) => state.screenHeight / 969 * n,	vwToPx: (state, getters) => (n) => getters.vw * n,	vhToPx: (state, getters) => (n) => getters.vh * n,
  },
  mutations: {
    setUserInfo(state,info){
      state.userInfo = info
    },	setScreenWidth(state, width) {	    state.screenWidth = width;	},	setScreenHeight(state, height) {	    state.screenHeight = height;	},
  },
  actions: {	  resizeASync: ({ state, commit }, params) => {	      if (state.resizeTimer) clearTimeout(state.resizeTimer);	      state.resizeTimer = setTimeout(() => {	          commit('setScreenWidth', params.width);	          commit('setScreenHeight', params.height);	      }, 500);	}
  },
  modules: {
  }
})
