import Vue from 'vue';
import Tabs from './views/Tabs.vue';
import Learn from './views/Learn.vue';
import Thoughts from './views/Thoughts.vue';
import Settings from './views/Settings.vue';
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name: 'thoughts' },
      name: 'tabs',
      component: Tabs,
      children: [
        {
          path: 'learn',
          name: 'learn',
          component: Learn
        },
        {
          path: 'thoughts',
          name: 'thoughts',
          component: Thoughts
        },
        {
          path: 'settings',
          name: 'settings',
          component: Settings
        }
      ]
    }
  ]
});
