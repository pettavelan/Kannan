<template>
  <div class="register">
    <button><h1>CREATE</h1></button><br>
    <button><h1>VIEW</h1></button><br>
    <button><h1>DELETE</h1></button><br>
  </div>
</template>

<script>
export default {
  name: 'frontpage',
  
}
</script>

<style>
.register button {
  width: 320px;
  height: 48px;
  background-color: rgb(36, 116, 4); 
  border: 1px solid rgb(255, 0, 0);
  color: rgb(27, 4, 65);
  padding-left: 30px;
  text-align: center;
  display: block;
  font-size: 8px;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
} 
</style>
