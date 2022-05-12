<script>
    export let item;
    import { basket } from '../global';
</script>

<div class="card w-full bg-base-100">
  <img src={item.image} alt="Drinks" />
  <div class="card-body">
    <h2 class="text-center font-bold text-lg">{item.name}</h2>
    <span class="text-center">£{item.price}</span>
    <div class="card-actions justify-center">
      <button on:click={()=>{
        if($basket[item.name]) {
          $basket[item.name].quantity += 1;
        } else {
          $basket[item.name] = item;
        }
        localStorage.setItem('basket', JSON.stringify($basket))
      }} class="btn btn-primary btn-md">Add to Basket</button>
    </div>
  </div>
</div>