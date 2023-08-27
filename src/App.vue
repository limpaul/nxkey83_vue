<template>
   <router-link to="/">Home</router-link> | 
   <router-link to="/Login">Login</router-link>
   <router-view/>
</template>

<script>
//import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    //Login
  }
}
</script>

<style>

</style>
