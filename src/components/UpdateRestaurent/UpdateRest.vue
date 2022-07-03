<template>
    <HeaderComp />
    <img src="../../assets/Res-Logo.png" class="logo" />
    <h1>Wel-come on Update_Restaurent Page</h1>
    <form @submit.prevent="putFormData()" class="add">
      <input type="text" placeholder="Enter Name" v-model="restaurent.name">
      <input type="number" placeholder="Enter Numer" v-model="restaurent.contact">
      <input type="text" placeholder="Enter Address" v-model="restaurent.address">
      <button type="submit">Update or Edit_Restaurent</button>
    </form>
</template>

<script>
import axios from 'axios'
import HeaderComp from '../Header/HeaderComp.vue'
export default {
    name:"UpdateRest",

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
      async putFormData(){
        // console.log(this.restaurent)
        const putData = await axios.put("http://localhost:5000/restaurents/"+this.$route.params.id, {
          name: this.restaurent.name,
          contact: this.restaurent.contact,
          address: this.restaurent.address
        })
          console.log("Form Data", putData.data)
          if(putData.status==200)
          {
            this.restaurent.name="";
            this.restaurent.contact= "";
            this.restaurent.address= "";
            this.$router.push({ name: "HomeComp" });
          } 
      }
    },
    
    async mounted() {
    let user = localStorage.getItem("Logged_in_Info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get('http://localhost:5000/restaurents/'+this.$route.params.id)
    // console.log(this.$route.params.id)
    // console.log(result.data)
    this.restaurent=result.data
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