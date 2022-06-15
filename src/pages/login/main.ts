import Vue from 'vue';
// 引入vant组件 ---也可按需引入 
// import Button from 'vant/lib/button';
// import 'vant/lib/button/style';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import App from './index.vue';
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
