<template>
  <div class="post-form">
    <div class="icon-area">
      <div class="icon-container">
        <img :src="user.iconUrl" />
      </div>
    </div>
    <div class="form-area">
      <div class="text-container">
        <textarea
          id="tweet-form-text"
          :value="tweetContent"
          @input="$emit('input', $event.target.value)"
        ></textarea>
      </div>
      <div class="controller-container">
        <div class="submit-button-container">
          <button class="submit-tweet" @click="submit">つぶやく</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tweetContent: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      user: {
        iconUrl:
          "https://4.bp.blogspot.com/-xz7m7yMI-CI/U1T3vVaFfZI/AAAAAAAAfWI/TOJPmuapl-c/s400/figure_standing.png"
      }
    };
  },
  methods: {
    submit() {
      this.$emit("submit");
    },
    updateTweetText(event) {
      this.$emit("onInputTweetContent", event.target.value);
    }
  }
};
</script>

<style scoped>
.post-form {
  display: flex;
  padding: 20px 10px;
}

.icon-container {
  width: 50px;
  padding: 0 3px;
}

.icon-container img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
}

.form-area {
  width: 100%;
}

.text-container {
  width: 100%;
  height: 80px;
  padding: 8px;
}

.text-container textarea {
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 18px;
}

.controller-container {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row-reverse;
  padding: 3px;
}

.submit-button-container {
  width: 100px;
  height: 100%;
}

.submit-tweet {
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #fafafa;
  border-radius: 20px;
  background-color: rgb(84, 201, 247);
  border: none;
}
</style>
