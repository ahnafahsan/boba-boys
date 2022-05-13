<script>
    import Card from "../components/Card.svelte";

    const teas = {
        'Brown tea': 'https://i.imgur.com/wVNbzhu.jpg',
        'Orange tea': 'https://i.imgur.com/3vNRblO.jpg',
        'Chocolate tea': 'https://i.imgur.com/LC1VZfk.jpg',
        'Egg tea': 'https://i.imgur.com/ifwElhk.jpg',
        'Cloud tea': 'https://i.imgur.com/cmMjQqN.jpg',
        'White tea': 'https://i.imgur.com/f8QOrak.jpg'
    }
</script>

<div class="w-11/12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
    {#each Object.entries(teas) as [name, pic]}
        <Card item={{
            name: name,
            price: 5.99,
            image: pic,
            quantity: 1
        }}/>
    {/each}
</div>