<template>
    
    <div id="navbar">
    <a  @click="clickMe">Add Item</a>
    <a  ></a>
    <a href="#contact"></a>
    </div>
</template>
<script>
import JSAlert from 'js-alert'

    export default{
      methods: {
        clickMe() {
          var mydata={"id":4,"itemno":4,"itemname":'Pia',"avail":true}
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
        },
        
        deleteMe(){
          fetch('http://localhost:3000/inventory/' + id, {
            method: 'DELETE',
          })
          .then(res => res.text()) // or res.json()
          .then(res => console.log(res))
        }
      }
    }
</script>
<style>
/* Style the navbar */
#navbar {
  border-radius: 15px;
  position: sticky;
  top: 0;
  overflow: hidden;
  background-color: #333;
}

/* Navbar links */
#navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

/* Page content */
.content {
  padding: 16px;
}
</style>