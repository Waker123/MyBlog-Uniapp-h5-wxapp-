import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
//公共js
import PubFuc from'./publicjs/common'

Vue.config.productionTip = false

App.mpType = 'app'
//挂载
Vue.use(uView);
Vue.prototype.$pubFuc = PubFuc
const app = new Vue({
    ...App
})
app.$mount()
