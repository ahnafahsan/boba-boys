<script>
    import { getDatabase, ref, set } from "firebase/database";
    import Logo from '../assets/Logo.svelte';
    import { basket, userAuth } from '../global';
    import { push } from 'svelte-spa-router';
    import { uid } from 'uid'

    let cardInput;
    const handleCardInput = () => {
        cardInput.value = cardInput.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }

    let expiryInput;
    const handleExpiryInput = () => {
        if(expiryInput.value.length > 1 && !expiryInput.value.match('/')) {
            const expiry = expiryInput.value.split('');
            let newExpiry = expiry[0] + expiry[1] + '/';
            for(let i = 2; i < expiry.length; i++) {
                newExpiry += expiry[i];
            }
            expiryInput.value = newExpiry;
        }
    }

    document.addEventListener('onautocomplete', e => {
        if(e.target.hasAttribute('autocompleted')) {
            handleCardInput();
            handleExpiryInput();
        }
    })

    let cvvInput;
    let nameInput;
    let fullInput;
    let addressInput;
    let postInput;
    let countryInput;

    let valid = false;
    const validateCheckout = () => {
        if(!$userAuth.email) {return false}
        try {
            if(cardInput.value.length >= 19
            && (expiryInput.value.length > 6
            || expiryInput.value.length == 5)
            && cvvInput.value.length > 2
            && nameInput.value.length > 0
            && fullInput.value.length > 0
            && addressInput.value.length > 0
            && postInput.value.length > 0
            && countryInput.value.length > 0) {
                valid = true;
                return true;
            } else {
                valid = false;
                return false;
            }
        } catch {
            return false;
        }
    }

    const onCheckout = () => {
        if(validateCheckout()) {
            const id = uid(20);
            const db = getDatabase();
            set(ref(db, `users/${$userAuth.email.replace('.', '-')}/orders/${id}`), {
                basket: $basket,
                shipping: {
                    name: nameInput.value,
                    address: addressInput.value,
                    post: postInput.value,
                    country: countryInput.value,
                },
                date: new Date().toJSON().slice(0,10).replace(/-/g,'/')
            });
            setTimeout(() => {
                push(`/orders/${id}`);
                $basket = {};
                localStorage.setItem('basket', null);
            }, 500);
        }
    }
</script>

<form action="#/checkout" class={`flex flex-col-reverse ${$userAuth.email && 'lg:flex-row'} w-11/12 md:w-auto md:justify-between bg-white shadow-xl rounded-box p-5 mb-5`}>
    <div class="lg:mr-10">
        {#if $userAuth.email}
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
        <div class="flex justify-evenly">
            <div class="flex flex-col">
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
        <button class={`${!valid && 'btn-disabled'} btn btn-primary mt-5 w-full`}
        on:click={onCheckout}
        >Checkout</button>
        {/if}
        <button class={`${$userAuth.email?.length > 0 && 'hidden'} btn btn-primary mt-5 w-full`}
        on:click={()=>setTimeout(() => {
            push('/login')
        }, 100)}
        >Sign in to checkout</button>
    </div>
    <div class="mb-5">
        <div class="justify-center >:w-40 w-full hidden lg:flex"><Logo></Logo></div>
        <span class="text-2xl">Your order</span>
        <hr class="mb-5 mt-2 bg-black"/>
        <ul class="w-96 overflow-y-auto >:my-5">
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
        <hr class="my-5">
        <span><b>Total:</b> {(()=>{
            let total = 0;
            Object.values($basket).map(info => {
                total += info.price * info.quantity;
            })
            return total.toLocaleString('en-US', {
                style: 'currency',
                currency: 'GBP'
            });
        })()}</span>
    </div>
    <div class="flex justify-center w-full >:w-40 lg:hidden"><Logo></Logo></div>
</form>