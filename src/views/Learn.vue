<template>
  <ion-content>
    <div class="learn-content">
      <div class="learn-content--header ion-margin">
        <ion-text>
          <h2>Read This First</h2>
          <p>Learn the basics of CBT and how to use Ahon</p>
        </ion-text>
      </div>
      <div class="learn-conent--list">
        <ion-card>
          <ion-card-header>
            <ion-card-title>How to use Ahon</ion-card-title>
            <ion-card-subtitle>8 min read</ion-card-subtitle>
          </ion-card-header>
          <img src="./../assets/shapes.svg" alt />
        </ion-card>
      </div>
    </div>

    <div class="learn-content">
      <div class="learn-content--header ion-margin">
        <ion-text>
          <h2>Cognitive Distortions</h2>
          <p>Learn the most common ways your thoughts can be distorted</p>
        </ion-text>
      </div>
      <div class="learn-content--list">
        <ion-card>
          <ion-card-header>
            <ion-card-title>All or Nothing Thinking</ion-card-title>
            <ion-card-subtitle>1 min read</ion-card-subtitle>
          </ion-card-header>
          <img src="./../assets/shapes.svg" alt />
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Catastrophizing</ion-card-title>
            <ion-card-subtitle>1 min read</ion-card-subtitle>
          </ion-card-header>
          <img src="./../assets/shapes.svg" alt />
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Emotional Reasoning</ion-card-title>
            <ion-card-subtitle>1 min read</ion-card-subtitle>
          </ion-card-header>
          <img src="./../assets/shapes.svg" alt />
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Fortune Telling</ion-card-title>
            <ion-card-subtitle>1 min read</ion-card-subtitle>
          </ion-card-header>
          <img src="./../assets/shapes.svg" alt />
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Labeling</ion-card-title>
            <ion-card-subtitle>1 min read</ion-card-subtitle>
          </ion-card-header>
          <img src="./../assets/shapes.svg" alt />
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Magnification of the Negative</ion-card-title>
            <ion-card-subtitle>1 min read</ion-card-subtitle>
          </ion-card-header>
          <img src="./../assets/shapes.svg" alt />
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Mind Reading</ion-card-title>
            <ion-card-subtitle>1 min read</ion-card-subtitle>
          </ion-card-header>
          <img src="./../assets/shapes.svg" alt />
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Minimization of the Positive</ion-card-title>
            <ion-card-subtitle>1 min read</ion-card-subtitle>
          </ion-card-header>
          <img src="./../assets/shapes.svg" alt />
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Other Blaming</ion-card-title>
            <ion-card-subtitle>1 min read</ion-card-subtitle>
          </ion-card-header>
          <img src="./../assets/shapes.svg" alt />
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Overgeneratlization</ion-card-title>
            <ion-card-subtitle>1 min read</ion-card-subtitle>
          </ion-card-header>
          <img src="./../assets/shapes.svg" alt />
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Self Blaming</ion-card-title>
            <ion-card-subtitle>1 min read</ion-card-subtitle>
          </ion-card-header>
          <img src="./../assets/shapes.svg" alt />
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Should Statements</ion-card-title>
            <ion-card-subtitle>1 min read</ion-card-subtitle>
          </ion-card-header>
          <img src="./../assets/shapes.svg" alt />
        </ion-card>
      </div>
    </div>
  </ion-content>
</template>

<script scoped>
export default {
  name: 'learn'
};
</script>

<style>
.welcome-card img {
  max-height: 35vh;
  overflow: hidden;
}

ion-card-header {
  padding-bottom: 10px;
}

ion-card-title {
  font-size: 18px;
}

ion-card-subtitle {
  font-size: 10px;
}

.learn-content--header {
  font-size: var(--ion-font-family, inherit);
}

.learn-content--header h2 {
  font-weight: 700;
  font-size: 22px;
}

p {
  font-size: 16px;
}
</style>