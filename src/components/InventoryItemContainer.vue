<template>
  
  <div >
    <input id="input_float" v-model="searchTerm" placeholder="Search items..." />
    
    <div class="thing" id="wrapper" v-for="x in items" >
        
        <div v-if="searchTerm === x.id">
          <InventoryItem v-bind:id="x.id" v-bind:itemno="x.itemno" v-bind:itemname="x.itemname"  v-bind:avail="x.avail" v-bind:date_entry="x.date_entry" v-bind:company="x.company"/>
        </div>
        <div v-else-if="searchTerm ===''">
          <InventoryItem v-bind:id="x.id" v-bind:itemno="x.itemno" v-bind:itemname="x.itemname"  v-bind:avail="x.avail" v-bind:date_entry="x.date_entry" v-bind:company="x.company"/>
        </div>
      </div>
  </div>
    
    
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import InventoryItem from './InventoryItem.vue';
import NavBar2 from '@/components/NavBar2.vue';
//import { createStore } from '@/store/index.js';
//import {createStore} from 'vuex'
//export default createStore()

//const itemStore = createStore()

//itemStore.getItems()




export  default{
    components: {InventoryItem,NavBar,NavBar2},
    setup() {
      const count = ''
      //console.log($store)
      // expose to template and other options API hooks
      
      return {
        count
      }
    },
    data(){
      
        return{
          
            //itemnos:[{itemno:1,itemname:'Apollo',avail:true},{itemno:2,itemname:'Jing',avail:false}],
            //itemsnos:this.$store.state.itemnos2
            searchTerm:''
        } 
    },
    mounted(){
      this.$store.dispatch('getItems')
    },
    methods: {
        clickMe() {
          var mydata={"id":4,"itemno":4,"itemname":'Pia',"avail":true}
          this.$store.dispatch("Insert_Inventory", mydata);
          JSAlert.alert("You added and inventory!");
          this.$store.dispatch('getItems')
          console.log(this.$store.state.itemnos2)
        }
      },
    computed:{
      items(){ 
        //this.$store.dispatch('getItems')
        var data1=this.$store.state.itemnos2

        return data1
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

#input_float {
  
  position: sticky;
  top: 0;
  overflow: hidden;
  float: right;
  margin: 10px;
}

</style>