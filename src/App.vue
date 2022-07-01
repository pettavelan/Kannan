<template>
 <div class="logo">
   <h1>{{ msg }}</h1>
   <img src="./assets/weblogo.jpg"
    width="100"
    height="150"/>
 </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: "kannan"
    }
  }
}
</script>

<style>
.logo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: rgb(0, 255, 76);
 margin-top: 60px;
}
</style>
