<template>
  <ion-content>
    <div class="learn-content">
      <div class="learn-content--header ion-margin">
        <ion-text>
          <h2>Automatic Thought</h2>
          <p>What's going on?</p>
        </ion-text>
      </div>
      <div class="automatic-thought ion-margin">
        <textarea type="text" placeholder="ex. 'The plane might crash.'" />
        <ion-button expand="block" color="primary">Next</ion-button>
      </div>
    </div>

    <div class="learn-content">
      <div class="learn-content--header ion-margin">
        <ion-text>
          <h2>Today</h2>
        </ion-text>
      </div>
      <div class="learn-content--list">
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>Emotional Reasoning</ion-card-subtitle>
            <ion-card-title>I feel afraid, so I'll have a panic attack.</ion-card-title>
            <div class="results">
              <p>Felt better after recording</p>
            </div>
          </ion-card-header>
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>All or Nothing Thinking</ion-card-subtitle>
            <ion-card-title>That was a thorough waste of time.</ion-card-title>
            <div class="results">
              <p>Felt better after recording</p>
            </div>
          </ion-card-header>
        </ion-card>
      </div>

      <div class="learn-content--header ion-margin">
        <ion-text>
          <h2>Yesterday</h2>
        </ion-text>
      </div>
      <div class="learn-content--list">
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>Over Generalization</ion-card-subtitle>
            <ion-card-title>Everyone will let me down.</ion-card-title>
            <div class="results">
              <p>Felt better after recording</p>
            </div>
          </ion-card-header>
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>Should Statements</ion-card-subtitle>
            <ion-card-title>I should have been better.</ion-card-title>
            <div class="results">
              <p>Felt better after recording</p>
            </div>
          </ion-card-header>
        </ion-card>
      </div>
    </div>
  </ion-content>
</template>

<script>
export default {
  name: 'thoughts'
};
</script>

<style scoped>
.automatic-thought textarea {
  width: 100%;
  height: 100px;
  border: 1.5px solid #e7e7e7;
  border-radius: 5px;
  outline: none;
}

ion-button {
  margin: 10px 0 10px 0;
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
  margin: 5px 0;
}

.results {
  background: #e7e7e7;
  border-radius: 5px;
  padding: 5px;
  margin: 10px 0;
}
</style>