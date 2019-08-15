import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Ionic from '@ionic/vue';

// Capacitor
import { Plugins, StatusBarStyle } from '@capacitor/core';
const { SplashScreen, StatusBar, Network } = Plugins;

// Ionic core styles and theming
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

// Disable tips
Vue.config.productionTip = false;

// Use ionic/vue plugin
Vue.use(Ionic);

// Initialize Capacitor
initCapacitor();

new Vue({
  router,
  render: h => h(App),
  async mounted() {
    SplashScreen.hide();
  }
}).$mount('#app');

// Initial Capacitor calls
async function initCapacitor() {
  // Set status-bar background and style
  StatusBar.setStyle({ style: StatusBarStyle.Light });
  StatusBar.show();
}
