<template>
  <div class="register">
    <img src="../../assets/Res-Logo.png" class="logo" />
    <h1>Sign Up</h1>
    <input type="text" placeholder="Enter User_Name" v-model="name" />
    <input type="email" placeholder="Enter Email" v-model="email" />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <button @click="signUp()">Sign_Up</button>
    <p> <router-link to="/login">Log_In</router-link> </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",

  data: function () {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    async signUp() {
      let response = await axios.post("http://localhost:5000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log("Sign_Up Info:", response.data);
      if (response.status == 201 && !this.name.length==0 && !this.email.length==0 && !this.password.length==0) {
        localStorage.setItem("Logged_in_Info", JSON.stringify(response.data));
        this.$router.push({
          name: "HomeComp",
        });
      } else{
        alert("All Details Required")
      }
    },
  },
    // After Sign-In the user should not be visit again the Sign_Up Page bellow code for taht purpose
  mounted() {
    let user = localStorage.getItem("Logged_in_Info");
    if (user) {
      this.$router.push({
        name: "HomeComp",
      });
    }
  },
};
</script>

<style scoped>
.logo {
  width: 150px;
  margin-top: 5px;
  padding: auto;
}

.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid skyblue;
}

.register button {
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
