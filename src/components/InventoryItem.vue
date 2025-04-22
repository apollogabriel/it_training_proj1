<template>
    <div>
        <div>
            <h3>Item No: {{ itemno }}</h3>
            <h3>Item : {{ itemname }}</h3>
        </div>
        
        <div id="div1">
            <div id="div2" @click="clickMe(this.itemno)">{{ btn1 }}</div>
            <div id="div2">Edit</div>
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
            itemno: {
               type: Object,
               default: () => ({}),
           },
           itemname: {
               type: Object,
               default: () => ({})
           }
        },
        data(){
            return{
                btn1:'Available'
            }
        },
        methods:{
            clickMe(id){
                //JSAlert.alert("Ok.");
                //JSAlert.alert("Your files have been saved successfully.", "Files Saved", "Got it");
                if(this.btn1=='Available'){
                    this.btn1='Unavailable'
                    JSAlert.alert("Ok change to "+this.btn1+"!");
                }else{
                    JSAlert.alert("Ok change to "+this.btn1+"!");
                    this.btn1='Available'
                }
                // JSAlert.confirm("Are you sure you want to change this "+this.btn1+"?").then(function(result) {

                // // Check if pressed yes
                // if (!result)
                    
                    
                //     return;
                
                // // User pressed yes!
                // JSAlert.alert("Ok done change to "+this.btn1+"!");

                // });
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