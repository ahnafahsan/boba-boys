<script>
    import { ref, get, getDatabase } from "firebase/database";
    import { basket, userAuth } from "../global";
    import Logo from "../assets/Logo.svelte";
    import { push } from "svelte-spa-router";

    export let params;
    let data;

    const usersRef = ref(getDatabase(), `users/`);

    get(usersRef).then(snapshot=>{
        const order = snapshot.val()[$userAuth.email.replace('.','-')].orders[params.id]
        if(order) {
            data = order;
        } else {
            push('/404');
        }
    })
</script>

<div class={`${!data ? 'flex' : 'hidden'} absolute z-0 w-full h-full items-center justify-center`}>
    <svg role="status" class="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
</div>
<div class={`${!data && 'hidden'} bg-white rounded-box shadow-xl p-5 w-90 flex mb-5 flex-col items-center w-11/12 md:w-auto`}>
    <div class="w-full >:h-40 >:w-full"><Logo></Logo></div>
    <h1 class="font-bold text-3xl my-5">Order summary</h1>
    <span class="mb-3"><b>Your order id is:</b> {params.id}</span>
        <ul class="w-full mb-2">
            <b>Address</b>
            <li>{data?.shipping.name}</li>
            <li>{data?.shipping.address}</li>
            <li>{data?.shipping.post}</li>
            <li>{data?.shipping.country}</li>
        </ul>
        <ul class="w-full overflow-y-auto">
            {#each Object.entries(data?.basket || {}) as [name, info]}
                <li class="flex h-20 w-20 >:rounded-box items-center my-3">
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
    <span class="w-full mt-3 text-xl"><b>Total:</b> {(()=>{
        let total = 0;
        Object.values(data?.basket || {}).map(info => {
            total += info.price * info.quantity;
        })
        return total.toLocaleString('en-US', {
            style: 'currency',
            currency: 'GBP'
        });
    })()}</span>
</div>