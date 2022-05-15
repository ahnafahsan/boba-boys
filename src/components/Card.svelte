<script>
    export let item;
    import { basket } from '../global';

    let selected = {};
    let modal;

    const addToBasket = () => {
      console.log(selected.ice.value)
      if(!$basket[item.name]) {
        $basket[item.name] = item;
        $basket[item.name].quantity = 0;
      }
      $basket[item.name].quantity += Number(selected.quantity.value);
      localStorage.setItem('basket', JSON.stringify($basket))
      modal.checked = false;
    }

    let success = false;

    const validate = () => {
      Object.values(selected).map(v => {
        if(v== 'Ice Level' || v == 'Sweeetness' || v == 'Topping') {
          success = false;
          return false;
        }
      })
      if(!(selected.quantity.value > 0)) {
        success = false
        return false;
      }
      success = true;
      return true;
    }
</script>

<div class="card w-full bg-base-100">
  <img src={item.image} alt="Drinks" />
  <div class="card-body">
    <h2 class="text-center font-bold text-lg">{item.name}</h2>
    <span class="text-center">£{item.price}</span>
    <div class="card-actions justify-center">
      <label for={item.name.split(' ').join('-')} class="btn btn-primary modal-button">add to basket</label>
    </div>
  </div>
</div>

<input type="checkbox" id={item.name.split(' ').join('-')} class="modal-toggle modal-open" bind:this={modal} />
<form on:input={validate} action="/#" class="modal">
  <div class="modal-box relative w-auto">
    <label for={item.name.split(' ').join('-')} class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div class="form-control w-full >:w-10/12 flex flex-col items-center">
      <span class="text-3xl font-bold w-full text-center mb-3">Addons</span>
      <select bind:this={selected['ice']} class="select select-bordered my-1">
        <option disabled selected>Ice Level</option>
        {#each ['0', '25', '50', '75', '100'] as option}
          <option value={option}>{option}%</option>
        {/each}
      </select>
      <select bind:this={selected['sweetness']} class="select select-bordered my-1">
        <option disabled selected>Sweetness</option>
        {#each ['0', '25', '50', '75', '100', '150'] as option}
          <option value={option}>{option}%</option>
        {/each}
      </select>
      <select bind:this={selected['toppings']} class="select select-bordered my-1">
        <option disabled selected>Topping</option>
        {#each ['Tapioca Pearls', 'Coconut Jelly', 'Mango Jelly', 'Lychee Jelly', 'Cheese Cream Foam', 'Egg Custard Pudding'] as option}
          <option value={option}>{option}</option>
        {/each}
      </select>
      <input bind:this={selected['quantity']} class="input input-bordered my-1" placeholder=Quantity type="number">
      <label type="submit" class={`w-full flex justify-center mt-3 ${!success && 'pointer-events-none'}`} for={item.name.split(' ').join('-')}>
        <button on:click={addToBasket} type="submit" class={`btn btn-primary w-full ${!success && 'btn-disabled'}`}>add to basket</button> 
      </label>
    </div>
  </div>
</form>