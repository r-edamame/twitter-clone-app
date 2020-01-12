import { auth } from "~/plugins/firebase.js";

export default function({ app, redirect }) {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        resolve();
      } else {
        if (localStorage.getItem("uid")) localStorage.removeItem("uid");
        resolve(redirect("/login"));
      }
    });
  });
}
