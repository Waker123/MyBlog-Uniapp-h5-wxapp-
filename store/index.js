import Vue from 'vue'
import Vuex from 'vuex'
import timeLine from './timeLine'

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		timeLine,
	}
})
