<template>
  <div id="app">
    <ion-app>
      <ion-vue-router />
    </ion-app>
  </div>
</template>

<style>
/* iPhone XR */
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
  ion-app {
    margin-top: 44px;
    margin-bottom: 34px;
  }
}

/* iPhone XS Max */
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
  ion-app {
    margin-top: 44px;
    margin-bottom: 34px;
  }
}

/* iPhone X and XS */
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  ion-app {
    margin-top: 44px;
    margin-bottom: 34px;
  }
}

/* iPhone 6, 7, 8 Plus */
@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
  ion-app {
    margin-top: 20px;
  }
}

/* iPhone 6, 7, 8 */
@media only screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
  ion-app {
    margin-top: 20px;
  }
}

/* iPhone 5, 5S, 5C and 5SE */
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
  ion-app {
    margin-top: 20px;
  }
}
</style>