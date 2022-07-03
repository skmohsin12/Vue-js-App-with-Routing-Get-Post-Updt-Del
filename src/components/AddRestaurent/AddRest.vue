<template>
    <HeaderComp />
    <img src="../../assets/Res-Logo.png" class="logo" />
    <h1>Wel-come on Add_Restaurent Page</h1>
    <form @submit.prevent="postFormData()" class="add">
      <input type="text" placeholder="Enter Name" v-model="restaurent.name">
      <input type="number" placeholder="Enter Numer" v-model="restaurent.contact">
      <input type="text" placeholder="Enter Address" v-model="restaurent.address">
      <button type="submit">Create_Restaurent</button>
    </form>
</template>

<script>
import axios from 'axios'
import HeaderComp from '../Header/HeaderComp.vue'
export default {
    name:"AddRest",

    components:{
      HeaderComp,
    },


    data(){
      return{
          restaurent:{
            name:"",
            contact: "",
            address: "",
          }
      }
    },

    methods:{
      async postFormData(){
        let resp = await axios.post("http://localhost:5000/restaurents", {
          name: this.restaurent.name,
          contact: this.restaurent.contact,
          address: this.restaurent.address
        })
          console.log("Form Data", resp.data)
          if(resp.status==201)
          {
            this.restaurent.name="";
            this.restaurent.contact= "";
            this.restaurent.address= "";
            this.$router.push({ name: "HomeComp" });
          } 
      }
    },

    mounted() {
    let user = localStorage.getItem("Logged_in_Info");
    if (!user) {
      this.$router.push({
        name: "SignUp",
      });
    }  
  },
}
</script>


<style scoped>
  h1{
    margin-top: 0;
  }
  .add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid skyblue;
}

.add button {
  background-color: #3f6d97;
  width: 320px;
  height: 40px;
  border: 2px solid skyblue;
  color: gold;
  cursor: pointer;
  font: bold;
  font-size: 20px;
}
</style>