/*入口文件*/
//引入Vue
import Vue from "vue";
//引入element-ui组件库,按需引入
import {DatePicker} from 'element-ui';
//引入element-ui组件库全部样式
// import 'element-ui/lib/theme-chalk/index.css';
//引入App组件,它是所有组件的父组件
import App from "./App.vue";
//引入插件
import vueResource from "vue-resource";
//路径写到文件夹即可,默认会使用index.js
import store from "./store";
//引入router
import router from "./router";
// import plugins from "./plugins";
//引入发布订阅库
// import pubsub from "pubsub-js";
//使用插件
Vue.use(vueResource);
// Vue.use(ElementUI);
Vue.component(DatePicker.name,DatePicker);
//关闭Vue的生产提示
Vue.config.productionTip = false;
//创建Vue实例,并挂载到id为app的元素上
const vm = new Vue({
  //将App组件渲染到页面中
  render: (h) => h(App),
  beforeCreate () {
    //为Vue原型添加一个消息订阅与发布,这样所有的组件就都能使用了
    Vue.prototype.$bus = this;
  },
  store,
  router
  // beforeCreate () {
  //   //为Vue原型添加一个消息订阅与发布,这样所有的组件就都能使用了
  //   Vue.prototype.$pubsub = pubsub;
  // }
});
//挂载到app
vm.$mount("#app");