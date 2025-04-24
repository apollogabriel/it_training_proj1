<template>
    <div id="div_scroll">
    
    <h2>Dashboard List of Inventory</h2>
   <InventoryItemContainer></InventoryItemContainer>

	<!-- Code begins here -->

	<a href="#" class="float">
	<i class="fa fa-plus my-float"></i>
	</a>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import InventoryItemContainer from '@/components/InventoryItemContainer.vue';

export default {
    components:{NavBar,InventoryItemContainer},
	mounted(){
		
	}
}
</script>

<style>
*{padding:0;margin:0;}

body{
	font-family:Verdana, Geneva, sans-serif;
	font-size:18px;
	background-color:#CCC;
}

.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#0C9;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
}

.my-float{
	margin-top:22px;
}
h2 {
	font-family: "Lucida Console", "Courier New", monospace;
	padding: 20px;
}


</style>