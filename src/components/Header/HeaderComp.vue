<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add_rest">Aadd Restaurent</router-link>
    <!-- <router-link to="/update_rest">Update Restaurent</router-link> -->
    <a href="#" @click="logOut()">Logout</a>
</div>
</template>

<script>
export default {
    name: "HeaderComp",

    methods:{
        logOut(){
            // console.log("logOut Successfylly :)")
            localStorage.clear()
            this.$router.push({ name: "LogIn"})
        }
    }
}
</script>

<style scoped>
.nav {
    background-color: #3f6d97;
    overflow: hidden;
}

.nav a {
    float: left;
    color: gold;
    padding: 14px 14px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 10px;
    cursor: pointer;
}

.nav a:hover{
    background-color: #769bbd;
    color: black;
}
</style>
