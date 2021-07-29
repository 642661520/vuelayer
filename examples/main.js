import App from './App.vue'
import LayerVue from '../src/index'
import './index.css'
Vue.use(LayerVue,{log:true})
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
