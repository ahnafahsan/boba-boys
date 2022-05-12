<script>
    import { getDatabase, ref, get } from 'firebase/database';
    import { userAuth } from '../global';

    let data = {};
    const usersRef = ref(getDatabase(), `users/`);
    get(usersRef).then(snapshot=>{
        const orders = snapshot.val()[$userAuth.email.replace('.','-')].orders
        if(orders) {
            data = orders;
        } else {
            data = {};
        }
    })
</script>

<div class={`${Object.keys(data).length == 0 ? 'flex' : 'hidden'} absolute z-0 w-full h-full items-center justify-center`}>
    <svg role="status" class="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
</div>
<div class={`${Object.keys(data).length == 0 && 'hidden'} bg-white shadow-xl rounded-box p-5 w-11/12 max-w-4xl`}>
    <span class="text-3xl font-bold">Order history</span>
    <ul class="mt-5">
        {#each Object.entries(data) as [id, order]}
            <li class="flex flex-col rounded-box shadow mb-5 last:mb-0">
                <div class="bg-gray-800 flex md:flex-row flex-col items-start md:justify-evenly rounded-t-box h-full md:h-14 text-white >:ml-5">
                    <span>{order.date}</span>
                    <span>Total {(()=>{
                        let total = 0;
                        Object.values(order.basket).map(info => {
                            total += info.price * info.quantity;
                        })
                        return total.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'GBP'
                        });
                    })()}</span>
                    <span>Dispatch To {order.shipping.name}</span>
                    <span>Order #{id}</span>
                </div>
                <div class="bg-white h-auto p-5 md:p-0 flex flex-col md:flex-row justify-between items-center md:items-start">
                    <img class="md:flex w-40 h-40 md:w-auto rounded-r-box rounded-bl-box" src={Object.values(order.basket)[0].image} alt="">
                    <div class="mt-7 ml-5 text-xl font-semibold w-full">
                        {(()=>{
                            let text = '';
                            Object.keys(order.basket).map(n => {
                                text += `${n}, `
                            })
                            return text.slice(0,-2);
                        })()}
                    </div>
                    <a class="btn btn-primary mr-5 mt-5" href={`#/orders/${id}`}>View Details</a>
                </div>
            </li>
        {/each}
    </ul>
</div>