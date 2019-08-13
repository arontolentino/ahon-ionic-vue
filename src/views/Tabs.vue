<template>
  <!-- Listen to before and after tab change events -->
  <ion-tabs>
    <ion-tab tab="learn" :routes="'learn'">
      <Learn />
    </ion-tab>

    <ion-tab tab="thoughts" :routes="'thoughts'">
      <Thoughts />
    </ion-tab>

    <ion-tab tab="setting" :routes="'settings'">
      <Settings />
    </ion-tab>

    <!-- Use v-slot:bottom with Vue ^2.6.0 -->
    <template slot="bottom">
      <ion-tab-bar>
        <ion-tab-button tab="learn" :to="{ name: 'learn' }">
          <ion-label>Learn</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="thoughts" :to="{ name: 'thoughts' }">
          <ion-label>Thoughts</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="settings" :to="{ name: 'settings' }">
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </template>
  </ion-tabs>
</template>

<script>
import Learn from './../views/Learn.vue';
import Thoughts from './../views/Thoughts.vue';
import Settings from './../views/Settings.vue';

export default {
  name: 'tabs',
  components: {
    Learn,
    Thoughts,
    Settings
  }
};
</script>

<style scoped>
ion-label {
  height: 16px;
}
</style>