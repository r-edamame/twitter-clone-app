export default function({ app, redirect }) {
  const uid = localStorage.getItem("uid");
  if (uid) {
    return redirect("/");
  }
}
