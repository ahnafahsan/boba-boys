<script>
  import { initializeApp } from "firebase/app";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { userAuth } from "./global";
  import Navbar from "./components/Navbar.svelte";
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import Login from "./routes/Login.svelte";
  import Checkout from "./routes/Checkout.svelte";
  import E404 from "./routes/404.svelte";
// @ts-ignore
  import Register from "./routes/Register.svelte";
  import { onMount } from "svelte";

  onMount(() => {
      const firebaseConfig = {
        apiKey: "AIzaSyCJwngDVGh8mHATY2HBlcWDDiiwX7yIOGc",
        authDomain: "boba-boys.firebaseapp.com",
        databaseURL: "https://boba-boys-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "boba-boys",
        storageBucket: "boba-boys.appspot.com",
        messagingSenderId: "7235050772",
        appId: "1:7235050772:web:9145bc77216ce1ac587601"
      };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    onAuthStateChanged(auth, user => {
      if(user) {
        // @ts-ignore
        $userAuth = user;
        console.log(user)
      }
    })
  })

  const routes = {
    "/": Home,
    "/login": Login,
    "/register": Register,
    "/checkout": Checkout,
    "*": E404,
  }

</script>

<main class="flex flex-col items-center">
  <Navbar/>
  <Router {routes}/>
</main>
