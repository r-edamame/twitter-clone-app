<template>
  <div class="tweet-container">
    <div class="tweet-left-side">
      <icon :icon-url="tweet.user.iconUrl" />
    </div>
    <div class="tweet-main-column">
      <div class="tweet-info">
        <div class="tweeter-name">{{ tweet.user.name }}</div>
        <div class="tweeter-id">{{ userId }}</div>
      </div>
      <div class="tweet-content">
        {{ tweet.text }}
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "~/components/tweet/Icon.vue";

export default {
  components: {
    Icon
  },
  props: {
    tweet: {
      type: Object,
      default: null
    }
  },
  computed: {
    userId() {
      return "@" + this.tweet.user.id;
    }
  }
};
</script>

<style scoped>
.tweet-container {
  display: flex;
  padding: 10px;
  width: 800px;
  border-bottom: 1px solid #eee;
}

.tweet-left-side {
  width: 80px;
}

.tweet-info {
  display: flex;
}

.tweeter-name {
  font-weight: bold;
  padding-right: 8px;
}

.tweeter-id {
  color: #888;
}
</style>
