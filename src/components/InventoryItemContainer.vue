<template>
    <div class="thing" id="wrapper" v-for="x in itemnos" >
        <InventoryItem v-bind:itemno="x.itemno" v-bind:itemname="x.itemname"  v-bind:avail="x.avail"/>
    </div>
</template>
<script>
import InventoryItem from './InventoryItem.vue';
export  default{
    components: {InventoryItem},
    data(){
        return{
            
            itemnos:[{itemno:1,itemname:'Apollo',avail:true},{itemno:2,itemname:'Jing',avail:false}]

        }
    }
}
</script>

<style>
.thing {
    margin: 10px;
  padding: 1rem;
  width: 420px;
  box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),
    0 5px 15px 0 rgba(0,0,0,0.08);
  background-color: #ffffff;
  border-radius: 0.5rem;
  
  border-left: 0 solid #00ff99;
  transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;
}

.thing:hover {
  padding-left: 0.5rem;
  border-left: 0.5rem solid #00ff99;
}

.thing > :first-child {
  margin-top: 0;
}

.thing > :last-child {
  margin-bottom: 0;
}

#wrapper {
    display: flex;
    flex-wrap: wrap;
}

</style>