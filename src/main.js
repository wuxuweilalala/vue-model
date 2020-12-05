import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { get, post, del, put } from './utils/http';
/*import VueAMap from 'vue-amap';
Vue.use(VueAMap);*/
import {
  Switch, Pagination, Dialog, Transfer, Message, Select, Option,
} from "element-ui";
Vue.use(Switch);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Transfer);
Vue.use(Select);
Vue.use(Option);

/*VueAMap.initAMapApiLoader({
  // 高德的key
  key: '852b4331fa1629f5c4722b5cab98a8c6',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '2.0'
});*/
Vue.prototype.$message = Message
Vue.config.productionTip = false
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$put = put;
Vue.prototype.$del = del;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
