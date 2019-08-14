<template>
  <div class="ArticleList">
    <div class="ArticleList__header ion-margin">
      <ion-text>
        <h2>Read This First</h2>
        <p>Learn the basics of CBT and how to use Ahon</p>
      </ion-text>
    </div>
    <div class="ArticleList__item" v-for="article in articles" :key="article.id">
      <ion-card>
        <ion-card-header>
          <ion-card-title>{{ article.title}}</ion-card-title>
          <ion-card-subtitle>{{ article.category }}</ion-card-subtitle>
        </ion-card-header>
        <img src="./../assets/shapes.svg" alt />
      </ion-card>
    </div>

    <div class="ArticleList__header ion-margin">
      <ion-text>
        <h2>Cognitive Distortions</h2>
        <p>Learn the most common ways your thoughts can be distorted</p>
      </ion-text>
    </div>
    <div class="ArticleList__item">
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
</template>

<script>
import db from './../firebase/init';
export default {
  name: 'ArticleList',
  data: function() {
    return {
      articles: []
    };
  },
  methods: {},
  created() {
    db.collection('articles')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let article = doc.data();
          article.id = doc.id;
          this.articles.push(article);
        });
      });
  }
};
</script>

<style scoped>
ion-card-header {
  padding-bottom: 10px;
}

ion-card-title {
  font-size: 18px;
}

ion-card-subtitle {
  font-size: 10px;
}

.ArticleList__header {
  font-size: var(--ion-font-family, inherit);
}

.ArticleList__header h2 {
  font-weight: 700;
  font-size: 22px;
}

p {
  font-size: 16px;
}
</style>