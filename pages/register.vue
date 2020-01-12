<template>
  <div class="registration-form">
    <div class="email-container">
      <span class="email-title">Email</span>
      <input v-model="email" type="text" />
    </div>
    <div class="password-container">
      <span class="password-title">Password</span>
      <input v-model="password" type="password" />
    </div>
    <div class="submit-button-container">
      <button @click="submit">register</button>
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
        this.$cookies.set("session", user.uid);
      }
    });
  },
  methods: {
    async submit() {
      try {
        await auth.createUserWithEmailAndPassword(this.email, this.password);
        setTimeout(() => location.reload(), 100);
      } catch (e) {
        alert("registration failed");
      }
    }
  },
  middleware: "login"
};
</script>
