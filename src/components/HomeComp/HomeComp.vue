<template>
  <HeaderComp />
  <img src="../../assets/Res-Logo.png" class="logo" />
  <h1 id="head">Hi {{ name }}, Wel-come on Home Page</h1>
  <table border="1">
    <tr class="frow">
      <th>Sr No</th>
      <th>Id_No</th>
      <th>Name</th>
      <th>Contact</th>
      <th>Address</th>
      <th>Actions</th>
    </tr>
    <tr v-for="(elem, index) in restaurent" :key="index" class="srow">
      <td>{{ index + 1 }}</td>
      <td>{{ elem.id }}</td>
      <td>{{ elem.name }}</td>
      <td>{{ elem.contact }}</td>
      <td>{{ elem.address }}</td>
      <td>
        <router-link :to="'/update_rest/' + elem.id"
          ><button>Update_Res</button></router-link
        >
        <button @click="deleteRest(elem.id)">Delete_Res</button>
      </td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
import HeaderComp from "../Header/HeaderComp.vue";
export default {
  name: "UpdateRest",

  data() {
    return {
      name: "",
      restaurent: [],
    };
  },

  components: {
    HeaderComp,
  },

  methods: {
    // for handle the delete functionality
    async deleteRest(id) {
      const del = await axios.delete("http://localhost:5000/restaurents/" + id);
      // console.log(del.status);
      if(del.status==200)
      {
        this.loadData()
      }
    },

    async loadData() {
      let user = localStorage.getItem("Logged_in_Info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({
          name: "SignUp",
        });
      }

      let result = await axios.get("http://localhost:5000/restaurents");
      // console.log(result.data)
      this.restaurent = result.data;
    },
  },

  async mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
table {
  text-align: center;
  display: inline-block;
}

th,
td {
  width: 160px;
  height: 30px;
}

.frow {
  background-color: #3f6d97;
  color: gold;
}

.srow {
  background-color: #aec2d5;
  font-weight: bold;
}

button {
  background-color: #3f6d97;
  /* width: 100px; */
  /* height: 20px; */
  border: 2px solid skyblue;
  color: gold;
  cursor: pointer;
  /* font: bold; */
  font-size: 15px;
  border-radius: 10px;
}

button:hover {
  background-color: #769bbd;
  color: black;
}

#head {
  margin-top: 0;
}

.logo {
  margin: 0;
  padding: 0;
}
</style>
