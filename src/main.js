import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bulma/css/bulma.css'
import Buefy from 'buefy'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
Vue.use(Buefy)
library.add(faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
