<template>
    <nav class="nav-container">
        <ul class="rigth-side">
            <li><a  @click="showModal = !showModal">Add Item</a></li>
            

        </ul>

        <ul class="left-side">
            <li><a href="">User: Apollo</a></li>
        </ul>
    </nav>

    
      <div v-if="showModal">
        <!--
      you can use custom content here to overwrite
      default content
    -->
    <form>
      <label for="fname">Item name:</label><br>
      <input type="text" v-model="itemname"><br>
      <label for="lname">Company:</label><br>
      <input type="text" v-model="company"><br>
      <label for="fname">Date Entry:</label><br>
      <input type="text" v-model="dateentry"><br><br>
      <input type="button" value="Submit" @click="clickMe">
    </form> 
      </div>

      
    
</template>
<script>
import JSAlert from 'js-alert'

    export default{
      data(){
        return{
          showModal:false,
          showUser:false,
          itemname:'',
          company:'',
          dateentry:'',
        }
      },
      methods: {
        clickMe() {
          
          var mydata={"id":4,"itemno":4,"itemname":this.itemname,"avail":true,"date_entry":this.dateentry,"company":this.company}
          this.$store.dispatch("Insert_Inventory", mydata);
          JSAlert.alert("You added and inventory!");
          this.$store.dispatch('getItems')
          console.log(this.$store.state.itemnos2)

          fetch('http://localhost:3000/inventory', {
            method: 'POST',
            header: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'      
            },
            body: JSON.stringify(mydata)
        })
        //.then(() => this.$router.push('/'))
        .catch(err => console.log(err))
        }
      }
    }
</script>
<style>
.nav-container{
    
    display: flex;
    justify-content:space-between;
    border-radius: 25px;
    margin-top: 50px;
    overflow: hidden;


    position: sticky;
    top: 0;
    background-color: #333;
}
.rigth-side, .left-side{
    list-style-type:none;
}

.rigth-side li, .left-side li{
    display: inline-block;
}

.rigth-side li a, .left-side li a{
   text-decoration: none;
   display: block;
   width:100%;
   height: 100%;
   font-size: 20px;
   /* color: #333; */
   padding:14px;
   font-weight: bold;

   float: left;
  
  color: #f2f2f2;
  text-align: center;
  
  text-decoration: none;
}

.rigth-side li a:hover, .left-side li a:hover{
    color:green;
}
</style>