<script>
  import Navbar from "./components/Navbar.svelte";
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import Login from "./routes/Login.svelte";
  import Checkout from "./routes/Checkout.svelte";
  import E404 from "./routes/404.svelte";

  const routes = {
    "/": Home,
    "/login": Login,
    "/checkout": Checkout,
    "*": E404,
  }
</script>

<main class="flex flex-col items-center">
  <Navbar/>
  <Router {routes}/>
</main>
