<template>
    <div >
        <div>
            <h1>Item ID: {{ id }}</h1>
            <h3>Item No: {{ itemno }}</h3>
            <p>Item : {{ itemname }}</p>
            <p>Date : {{ date_entry }}</p>
            <p>Company : {{ company }}</p>
        </div>
        
        <div id="div1" class="grid-container">
            <div class="grid-item" id="div2" @click="clickMe(this.id,this.avail)"><span v-if="avail">Available!</span><span v-else>Unavailable 😢</span></div>
            <div class="grid-item" id="div2" @click="updateMe(this.id)">Edit</div>
            <div class="grid-item" id="div2" @click="deleteMe(this.id)">Delete</div>
            <div class="grid-item" id="div2">Serviceable</div>
        </div>
    </div>
</template>
<script>
import { alert, force, confirm, input, select, date, setOptions, hideAlerts } from 'notie'
import notie from 'notie'
import JSAlert from 'js-alert'

    export default{
        props:{
            
            id: {
               type: String,
               default: () => ({}),
           },
            itemno: {
               type: String,
               default: () => ({}),
           },
           itemname: {
               type: String,
               default: () => ({})
           },
           avail: {
               type: Boolean,
               default: () => ({})
           },
           date_entry:{
                type: String,
               default: () => ({})
           },
           company:{
                type: String,
               default: () => ({})
           },
        },
        data(){
            return{
                btn1:'Available',
                
            }
        },
        methods:{
            clickMe(id,a){
                console.log(this.$store.state.itemnos2)
                const inventory = this.$store.state.itemnos2;
                

                function filterById(inventory, id) {
                    return inventory.filter(function(inventory) {return (inventory['id'] == id);})[0];
                }

                let mydata=filterById(inventory, id)
                mydata['avail']=!mydata['avail']
                //JSAlert.alert(id);
                //this.$store.dispatch("Update_Inventory_Avail", id);
                //console.log(this.props)
                //JSAlert.alert("Ok.");
                //JSAlert.alert("Your files have been saved successfully.", "Files Saved", "Got it");
                fetch(`http://localhost:3000/inventory/${id}`, {
                    method: "PUT",
                    body: JSON.stringify(mydata),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(() => {
                    // Perform any necessary actions after the update is successful
                    this.$store.dispatch('getItems')
                });
                if(a){
                    //props.avail=false
                    JSAlert.alert("Ok change to Unavailable!");
                }else{
                    //props.avail=true
                    JSAlert.alert("Ok change to Available!");
                    
                }
                //console.log(props.avail)
                // JSAlert.confirm("Are you sure you want to change this "+this.btn1+"?").then(function(result) {

                // // Check if pressed yes
                // if (!result)
                    
                    
                //     return;
                
                // // User pressed yes!
                // JSAlert.alert("Ok done change to "+this.btn1+"!");

                // });
            },
            updateMe(id){
                JSAlert.alert("You updated and inventory!");
                var mydata={"id":"4","itemno":"5","itemname":'Amari',"avail":true}
                var id=4;
                fetch(`http://localhost:3000/inventory/${id}`, {
                    method: "PUT",
                    body: JSON.stringify(mydata),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(() => {
                    // Perform any necessary actions after the update is successful
                    this.$store.dispatch('getItems')
                });
            },
            deleteMe(id){
                this.$store.dispatch('getItems')
                fetch('http://localhost:3000/inventory/' + id, {
                    method: 'DELETE',
                }).then(res => res.text()) // or res.json()
                .then(res => console.log(res)).then(() => {
                    // Perform any necessary actions after the update is successful
                    this.$store.dispatch('getItems')
                });
                //this.$store.dispatch('getItems')
                JSAlert.alert("You deleted an inventory!");
            }
        },
        beforeCreate(){
            this.$store.dispatch('getItems')
            console.log('B')
            //aa()
        },
        unmounted(){
            console.log('A')
        },
        mounted(){
            console.log('C')
        }
    }
</script>

<style>
#div1 {
    margin: 10px;
    flex-wrap:wrap;
}

#div2{
    border-radius: 15px;
    /* border-style: solid; */
    background-color: lightblue;
    /* display: inline; */
    margin: 10px;
    padding: 5px;
}

/* .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 10px;
      padding: 10px;
    }

.grid-item {
      background-color: #f3f4f6;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 10px;
      text-align: center;
      font-size: 1.2rem;
} */
</style>