import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VueSession from 'vue-session';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSession);
Vue.use(Vuetify);
Vue.use(VueSweetalert2);
Vue.use(require('vue-moment'));

export default new Vuetify({
});
