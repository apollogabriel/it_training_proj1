<template>
    <nav class="nav-container">
        <ul class="rigth-side">
            <li><a >Add Item</a></li>
            <li><a  >Add User</a></li>

        </ul>

        <ul class="left-side">
            <li><a href="">Apollo</a></li>
        </ul>
    </nav>
</template>

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