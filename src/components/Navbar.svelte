<script>
  // @ts-nocheck
  import Logo from '../assets/Logo.svelte';
  import { basket, userAuth } from '../global';
  import Bin from '../assets/Bin.svelte';
  import Plus from '../assets/Plus.svelte';
  import Minus from '../assets/Minus.svelte';
  import { getAuth, signOut } from 'firebase/auth';
import { push } from 'svelte-spa-router';

  const basketMinus = item => {
    const quantity = $basket[item.name].quantity;
    if(quantity > 1) {
      $basket[item.name].quantity -= 1;
      localStorage.setItem('basket', JSON.stringify($basket))
    } else if(quantity == 1) {
      basketDelete(item);
    }
  }
  const basketPlus = item => {
    $basket[item.name].quantity += 1;
    localStorage.setItem('basket', JSON.stringify($basket));
  }
  const basketDelete = item => {
    $basket = Object.fromEntries(Object.entries($basket).filter(([name])=>{
      name == item.name;
    }))
    localStorage.setItem('basket', JSON.stringify($basket));
  }
</script>
<div class="w-full flex justify-center my-6">
  <div class="navbar bg-base-100 shadow rounded-box w-11/12">
      <div class="flex-1">
          <a href="#/" class="btn btn-ghost normal-case text-xl flex justify-between">
              <Logo></Logo>
              <span class="whitespace-pre">{'   Boba Boys'}</span>
          </a>
      </div>
      <div class="flex-none">
          <div class="dropdown dropdown-end">
              <label for="" tabindex="0" class="btn btn-ghost btn-circle">
                  <div class="indicator">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span class="badge badge-sm indicator-item">{(()=>{
                      let total = 0;
                      Object.values($basket).forEach((item) => {
                        total += item.quantity;
                      })
                      return total;
                      })()}</span>
                  </div>
              </label>
              <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div class="card-body">
                      <span class="font-bold text-lg">{(()=>{
                        let total = 0;
                        Object.values($basket).forEach((item) => {
                          total += item.quantity;
                        })
                        return total;
                      })()} Items</span>
                      <span class="text-info">Subtotal: {(()=>{
                        let total = 0;
                        Object.values($basket).forEach((item) => {
                          total += item.price*item.quantity;
                        })
                        return '£' + total;
                      })()}</span>
                      <div class="card-actions">
                          <ul class="w-full">
                            {#each Object.values($basket) as item}
                              <li class="flex justify-between">
                                <div>
                                  <span>{item.name}</span>
                                  <span>x{item.quantity}</span>
                                </div>
                                <div class="flex">
                                  <button class="h-4 w-4 flex items-center justify-center active:scale-75 hover:text-red-600 transition-all duration-300"
                                    on:click={basketMinus(item)}>
                                    <Minus/>
                                  </button>
                                  <button class="h-4 w-4 flex items-center justify-center active:scale-75 hover:text-green-500 duration-300"
                                    on:click={basketPlus(item)}>
                                    <Plus/>
                                  </button>
                                  <button class="h-4 w-4 flex items-center justify-center active:scale-75 hover:text-red-600 duration-300"
                                    on:click={basketDelete(item)}>
                                    <Bin/>
                                  </button>
                                </div>
                              </li>
                            {/each}
                          </ul>
                          <button class={`btn btn-primary btn-block ${Object.keys($basket).length == 0 && 'btn-disabled'}`}
                            on:click={()=>push('/checkout')}
                          >Checkout</button>
                      </div>
                  </div>
              </div>
          </div>
          <div class="dropdown dropdown-end">
              <label for="" tabindex="0" class="btn btn-ghost btn-circle avatar">
                  <div class="w-10 rounded-full">
                      <img alt="profile" src="https://api.lorem.space/image/face?hash=33791" />
                  </div>
              </label>
              <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"> 
                {#if $userAuth.auth}
                    <div class="w-full text-center font-bold">{''}</div>
                    <li><a href="#/" on:click={()=>{
                      const auth = getAuth();
                      signOut(auth);
                      $userAuth.auth = null;
                    }}>Logout</a></li>
                {:else}
                    <li><a href="#/login">Login</a></li>
                    <li><a href="#/register">Register</a></li>
                {/if}
              </ul>
          </div>
      </div>
  </div>
</div>