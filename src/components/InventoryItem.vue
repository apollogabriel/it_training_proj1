<template>
    <div>
        <div>
            <h3>Item No. {{ itemno }}</h3>
            <h3>Item : {{ itemname }}</h3>
        </div>
        
        <div id="div1">
            <div id="div2">Add</div>
            <div id="div2">Edit</div>
            <div id="div2">Delete</div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            itemno: {
               type: Object,
               default: () => ({}),
           },
           itemname: {
               type: Object,
               default: () => ({})
           }
        }
    }
</script>

<style>
#div1 {
    margin: 10px;
}

#div2{
    border-radius: 15px;
    border-style: solid;
    background-color: lightblue;
    display: inline;
    margin: 10px;
    padding: 5px;
}
</style>