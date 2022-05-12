<script>
    import Card from "../components/Card.svelte";
</script>

<div class="w-11/12 grid grid-cols-1 gap-4 sm:grid-cols-2  md:grid-cols-3 md:gap-8 xl:grid-cols-5">
    {#each [1,1,1,1,1,1] as card}
        <Card item={{
            name: 'Tea',
            price: 5.99,
            image: "./src/assets/Pic1.jpg",
            quantity: 1
        }}/>
    {/each}
</div>