<template>
  <div class="message">logging out...</div>
</template>

<script>
import { auth } from "~/plugins/firebase.js";
export default {
  async mounted() {
    await auth.signOut();
    localStorage.removeItem("uid");
    location.reload();
  },
  middleware: "authenticated"
};
</script>
