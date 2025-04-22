<template>
    <div>
        <div>
            <h3>Item No: {{ itemno }}</h3>
            <h3>Item : {{ itemname }}</h3>
        </div>
        
        <div id="div1">
            <div id="div2" @click="clickMe(this.itemno,this.avail)"><span v-if="avail">Available!</span><span v-else>Unavailable 😢</span></div>
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
                console.log(this.props)
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