<script>
    import Logo from '../assets/Logo.svelte';


</script>
  
  <div class="flex flex-col items-center">
    <div class=">:w-28"><Logo></Logo></div>
    <h1 class="text-3xl font-bold my-5">Login to your account</h1>
    <form action="#/login" class="bg-white rounded-box shadow-lg flex flex-col w-full p-5">
        <div class="flex flex-col mb-3">
            <span class="mb-1">Email Address</span>
            <input type="email" autocomplete="email" required class="input border-gray-300 h-10">
        </div>
        <div class="flex flex-col mb-3">
          <span class="mb-1">Password</span>
          <input type="password" autocomplete="current-password" required class="input border-gray-300 h-10">
        </div>
        <button type="submit" class="btn btn-primary mt-3">
          Login
        </button>
        <a class="text-primary mt-3 link" href="#/register">Don't have an account?</a>
    </form>
  </div>