<template>
    <div>
        <h1>Item No. {{ itemno }}</h1>
        <h2>Item : {{ itemname }}</h2>
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