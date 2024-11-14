import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store/index";
import Vant from 'vant';
import 'vant/lib/index.css';
import Footer from "@/components/footer.vue";
import '@/http/index'
import {changeIdToLabel,getDict,downFile} from '@/utils'

Vue.component('PageFooter',Footer)

Vue.prototype.changeIdToLabel = changeIdToLabel
Vue.prototype.downFile = downFile
Vue.prototype.getDict = getDict

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
