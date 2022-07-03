<template>
<div class="login">
    <img src="../../assets/Res-Logo.png" class="logo" />
    <h1>Log_In Page</h1>
    <input type="email" placeholder="Enter Email" v-model="email" />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <button @click="logIn()">Log_In</button>
    <p> <router-link to="/signup">Sign_Up</router-link> </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "LogIn",

    data: function(){
        return{
            email: "",
            password: ""
        }
    },

    methods:{
        async logIn(){
            console.warn(this.email, this.password)
            let result = await axios.get(
                `http://localhost:5000/users?email=${this.email}&password=${this.password}`
            )
            if(result.status == 200 && result.data.length>0 && !this.email.length==0 && !this.password.length==0)
            {
                localStorage.setItem("Logged_in_Info", JSON.stringify(result.data[0]));
                this.$router.push({ name: "HomeComp" });
            }else{
              alert("Please fill the details")
            }

            console.log(result)
        }
    },
    // After Sign-In the user should not be visit again the Sign_Up Page bellow code for taht purpose
  mounted() {
    let user = localStorage.getItem("Logged_in_Info");
    if (user) {
      this.$router.push({ name: "HomeComp" });
    }
  },
}
</script>

<style scoped>
.logo {
  width: 150px;
  margin-top: 5px;
  padding: auto;
}

.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid skyblue;
}

.login button {
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
