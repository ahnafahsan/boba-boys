<script>
    import Error from '../assets/Error.svelte';
    import Success from '../assets/Success.svelte';
    import {basket} from '../global';

    let fail;
    let success;

    let cardInput;
    const handleCardInput = (evt) => {
        evt.target.value = evt.target.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }

    let expiryInput;
    const handleExpiryInput = (evt) => {
        if(evt.target.value.length > 1 && !evt.target.value.match('/')) {
            const expiry = evt.target.value.split('');
            let newExpiry = expiry[0] + expiry[1] + '/';
            for(let i = 2; i < expiry.length; i++) {
                newExpiry += expiry[i];
            }
            evt.target.value = newExpiry;
        }
    }

    let cvvInput;
    let nameInput;
    let fullInput;
    let addressInput;
    let postInput;
    let countryInput;

    let valid = false;
    const validateCheckout = () => {
        try {
            if(cardInput.value.length >= 19
            && expiryInput.value.length > 6
            && cvvInput.value.length > 2
            && nameInput.value.length > 0
            && fullInput.value.length > 0
            && addressInput.value.length > 0
            && postInput.value.length > 0
            && countryInput.value.length > 0) {
                valid = true;
            } else {
                valid = false;
            }
            console.log(valid)
        } catch {}
    }
</script>

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
<form action="#/checkout" class={`flex flex-col-reverse lg:flex-row md:justify-between bg-white shadow-xl rounded-box p-5 mb-5`}>
    <div class="lg:mr-10">
        <span class="text-2xl">Shipping details</span>
        <hr class="mb-5 mt-2"/>
        <div class="flex flex-col">
            <div class="flex flex-col mb-5">
                <span class="text-xs">FULL NAME</span>
                <input bind:this={fullInput} on:input={validateCheckout} class="input border-gray-300 h-10" type="text" required>
            </div>
            <div class="flex flex-col mb-5">
                <span class="text-xs">ADDRESS</span>
                <input bind:this={addressInput} on:input={validateCheckout} class="input border-gray-300 h-10" type="text" required>
            </div>
            <div class="flex flex-col mb-5">
                <span class="text-xs">POST CODE</span>
                <input bind:this={postInput} on:input={validateCheckout} class="input border-gray-300 h-10" type="text" required>
            </div>
            <div class="flex flex-col mb-5">
                <span class="text-xs">COUNTRY</span>
                <input bind:this={countryInput} on:input={validateCheckout} class="input border-gray-300 h-10" type="text" required>
            </div>
        </div>
        <span class="text-2xl">Payment details</span>
        <hr class="mb-5 mt-2"/>
        <div class="flex flex-col">
            <span class="text-xs">NAME ON CARD</span>
            <input bind:this={nameInput} on:input={validateCheckout} class="input border-gray-300 h-10" type="text" required>
        </div>
        <div class="flex flex-col my-5">
            <span class="text-xs">CARD NUMBER</span>
            <input required bind:this={cardInput} on:input={validateCheckout}  on:keypress={evt=>{
                if (evt.which < 48 || evt.which > 57 || cardInput.value.length >= 19) {
                    evt.preventDefault()
                };
                handleCardInput(evt);
            }} class="input border-gray-300 h-10" type="text" placeholder="0000 0000 0000 0000">
        </div>
        <div class="flex">
            <div class="flex flex-col mr-5">
                <span class="text-xs">EXPIRY DATE</span>
                <input required bind:this={expiryInput} on:input={validateCheckout} on:keypress={evt => {
                    if (evt.which < 48 || evt.which > 57 || expiryInput.value.length >= 7) {
                        evt.preventDefault()
                    }
                    handleExpiryInput(evt);
                }} class="input border-gray-300 h-10 w-40" type="text" placeholder="04/2025">
            </div>
            <div class="flex flex-col">
                <span class="text-xs">CVV</span>
                <input on:input={validateCheckout} bind:this={cvvInput} required class="input border-gray-300 h-10 w-40" type="password" placeholder="123">
            </div>
        </div>
        <button type="submit" class={`${!valid && 'btn-disabled'} btn btn-primary mt-5 w-full`}>Checkout</button>
    </div>
    <div class="mb-5">
        <span class="text-2xl">Your order</span>
        <hr class="mb-5 mt-2 bg-black"/>
        <ul class="w-96">
            {#each Object.entries($basket) as [name, info]}
                <li class="flex h-20 w-20 >:rounded-box items-center">
                    <img class="mr-5" src={info.image} alt="drink">
                    <div class="flex flex-col justify-start items-start">
                        <b>{name}</b>
                        <span>x{info.quantity}</span>
                        <span>{(info.price*info.quantity).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'GBP'
                          })}</span>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</form>