<script>
    import Card from "../components/Card.svelte";

    const teas = {
        'Thai Milk Tea': 'https://i.imgur.com/wVNbzhu.jpg',
        'Golden Hour': 'https://i.imgur.com/3vNRblO.jpg',
        'Tiramissu': 'https://i.imgur.com/LC1VZfk.jpg',
        'Egg Tea': 'https://i.imgur.com/ifwElhk.jpg',
        'Taro Latte': 'https://i.imgur.com/cmMjQqN.jpg',
        'MOOO!': 'https://i.imgur.com/f8QOrak.jpg',
        'Wintermelon': 'https://i.imgur.com/baTCEBw.jpg',
        'Nutty Professor': 'https://i.imgur.com/FeDerT0.jpg'
    }
</script>

<div class="w-11/12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
    {#each Object.entries(teas) as [name, pic]}
        <Card item={{
            name: name,
            price: 5.99,
            image: pic,
            quantity: 1
        }}/>
    {/each}
</div>