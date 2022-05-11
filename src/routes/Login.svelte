<script>
    import Logo from '../assets/Logo.svelte';
    import Error from '../assets/Error.svelte'
    import Success from '../assets/Success.svelte'
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
    import { push } from 'svelte-spa-router';
    
    let email;
    let pass;
    let confirm;
    let fail;
    let success;

    const validateEmail = () => {
      return email.value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };

    const login = () => {
      fail = null;
      success = null;
      if(pass.value 
      && email.value 
      && validateEmail()) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email.value, pass.value)
        .then(userCredential =>{
          success = 'Login successful!';
          email.value = '';
          pass.value = '';
          setTimeout(() => {
            push('/')
          }, 500);
        })
        .catch(error=>{
          fail = error.message.match(/\(([^)]+)\)/)[1].replaceAll('-', ' ').replace('auth/', '');
        })
      } else {
        fail = 'Please enter the required fields correctly';
      }
    }
</script>
  
  <div class="flex flex-col items-center">
    <div class=">:w-28"><Logo></Logo></div>
    <h1 class="text-3xl font-bold my-5">Login to your account</h1>
    <div class={`alert max-w-xs shadow-lg transition-all duration-200 ${fail && 'alert-error'} ${success && 'alert-success'} ${fail || success ?  'opacity-100 my-5' : 'opacity-0'}`}>
      <div class="unalert">
        {#if fail}
          <Error></Error>
        {:else if success}
          <Success></Success>
        {/if}
        <span class="h-full capital">{fail || success}</span>
      </div>
    </div>
    <form action="#/login" class="bg-white rounded-box shadow-lg flex flex-col w-full p-5">
        <div class="flex flex-col mb-3">
            <span class="mb-1">Email Address</span>
            <input bind:this={email} type="email" autocomplete="email" required class="input border-gray-300 h-10">
        </div>
        <div class="flex flex-col mb-3">
          <span class="mb-1">Password</span>
          <input bind:this={pass} type="password" autocomplete="current-password" required class="input border-gray-300 h-10">
        </div>
        <button type="submit" class="btn btn-primary mt-3"
          on:click={login}>
          Login
        </button>
        <a class="text-primary mt-3 link" href="#/register">Don't have an account?</a>
    </form>
  </div>