<template>
  <div class="container">
    <div class="post-form-container">
      <tweet-form
        :tweet-conent="postForm.content"
        :tweet-content="postForm.content"
        @submit="submitEvt"
        @input="postForm.content = $event"
      />
    </div>
    <div v-for="tweet in tweets" :key="tweet.id" class="tweets-container">
      <tweet :tweet="tweet" />
    </div>
  </div>
</template>

<script>
import Tweet from "~/components/Tweet.vue";
import TweetForm from "~/components/TweetForm.vue";
import { db } from "~/plugins/firebase.js";

/* eslint no-unused-vars: 0 */
function randomId() {
  let result = "";
  const elem = "abcdefghijklmnopqrstuvwxyz0123456789";
  const len = elem.length;
  for (let i = 0; i < 8; i++) {
    result += elem[Math.floor(Math.random() * len)];
  }
  return result;
}

export default {
  components: {
    Tweet,
    TweetForm
  },
  data() {
    return {
      tweets: [],
      postForm: {
        content: ""
      }
    };
  },
  async mounted() {
    // ツイート取得
    const snapShot = await db.collection("tweets").get();
    snapShot.forEach(doc => {
      this.tweets.push({ id: doc.id, ...doc.data() });
    });
  },
  methods: {
    submitEvt() {
      // 仮のユーザ情報でツイートを追加する
      this.tweets.unshift({
        id: randomId(),
        text: this.postForm.content,
        user: {
          name: "名無し",
          id: "anonymous",
          iconUrl:
            "https://4.bp.blogspot.com/-xz7m7yMI-CI/U1T3vVaFfZI/AAAAAAAAfWI/TOJPmuapl-c/s400/figure_standing.png"
        }
      });
      this.postForm.content = "";
    }
  },
  middleware: "authenticated"
};
</script>

<style scoped>
.container {
  width: 800px;
  margin: auto;
}

.post-form-container {
  border-bottom: 1px solid #eee;
}
</style>
