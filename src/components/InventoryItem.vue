<template>
    <div>
        <div>
            <h1>Item ID: {{ id }}</h1>
            <h3>Item No: {{ itemno }}</h3>
            <h3>Item : {{ itemname }}</h3>
        </div>
        
        <div id="div1">
            <div id="div2" @click="clickMe(this.id,this.avail)"><span v-if="avail">Available!</span><span v-else>Unavailable 😢</span></div>
            <div id="div2" @click="updateMe(this.id)">Edit</div>
            <div id="div2">Delete</div>
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
               type: Object,
               default: () => ({}),
           },
            itemno: {
               type: Object,
               default: () => ({}),
           },
           itemname: {
               type: Object,
               default: () => ({})
           },
           avail: {
               type: Object,
               default: () => ({})
           }
        },
        data(){
            return{
                btn1:'Available',
                
            }
        },
        methods:{
            clickMe(id,a){
                //JSAlert.alert(id);
                this.$store.dispatch("Update_Inventory_Avail", id);
                //console.log(this.props)
                //JSAlert.alert("Ok.");
                //JSAlert.alert("Your files have been saved successfully.", "Files Saved", "Got it");
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
                });
            },
            deleteMe(){
                fetch('http://localhost:3000/inventory/' + id, {
                    method: 'DELETE',
                })
                .then(res => res.text()) // or res.json()
                .then(res => console.log(res))
            }
        },
       
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