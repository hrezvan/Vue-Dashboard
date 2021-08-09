import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe , faWrench , faBell , faUser , faEnvelope , faPaperPlane , faBriefcase , faChartPie , faInfo , faComments , faShoppingBag , faDollarSign , faHouseDamage , faStickyNote , faAngleDown , faAngleUp , faBinoculars , faRecycle , faPhone , faEye , faArrowDown , faArrowUp , faBirthdayCake , faUpload , faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueRouter from 'vue-router';
import Routes from './routes';
// import { BootstrapVue } from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// Routing
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// Font Awesome Icons
library.add(faGlobe, faWrench , faBell , faUser , faEnvelope , faPaperPlane , faBriefcase , faChartPie , faInfo , faComments , faShoppingBag , faDollarSign , faHouseDamage , faStickyNote , faAngleDown , faAngleUp , faBinoculars , faRecycle , faPhone , faEye , faArrowDown , faArrowUp , faBirthdayCake , faUpload , faTrash)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
