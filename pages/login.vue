<template>
  <div class="login-form">
    <div class="email-container">
      <div class="title">Email</div>
      <input v-model="email" type="text" />
    </div>
    <div class="password-container">
      <div class="title">Password</div>
      <input v-model="password" type="password" />
    </div>
    <div class="submit-button-container">
      <button @click="submit">login</button>
    </div>
  </div>
</template>

<script>
import { auth } from "~/plugins/firebase.js";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  mounted() {
    auth.onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem("uid", user.uid);
        location.reload();
      }
    });
  },
  methods: {
    async submit(event) {
      event.target.disabled = true;
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password);
      } catch (e) {
        alert("login failed");
      }
      this.password = "";
      event.target.disabled = false;
    }
  },
  middleware: "login"
};
</script>
