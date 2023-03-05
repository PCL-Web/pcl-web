<script>

    export let actions;
    $: console.log(actions);
</script>

<button>Action Button</button>

<style>
button {
    background-color: rgb(85, 147, 238);
    color: white;
    padding: 10px;
    margin-bottom:10px;
    min-height:10px;
    width:auto;
    overflow: auto;
    border-radius: 10px;
    border: none;
}
</style>