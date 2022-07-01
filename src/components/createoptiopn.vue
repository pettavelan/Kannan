<template>
  <div class="field">
    <h3>{{mes }}</h3>
    <input type="text" placeholder="FULL NAME"/> 
    <input type="text" placeholder="LAST NAME"/>
    <input type="date" placeholder="DATE OF BIRTH"/> 
    <input type="text" placeholder="SKILL"/>
       <div class="paragraph"> 
         <p class="para">ARE YOU AVAILABLE IMMEDIATELY ></p>
       </div>
    <input type="radio" name="vailable" value="YES">YES 
    <input type="radio" name="available" value="NO">NO
    <button>SUBMIT</button>
  </div>
</template>

<script>
export default {
  name: 'createoption',
  data () {
    return {
      mes: 'ENTER YOUR DETAILS'
    }
  }
}
</script>

<style>
.field input {
 width: 300px; 
 height: 40px;
 border: 2px solid red;
 color: black;
 display: block;
 text-align: left;
 padding-left: 10px;
 font-size: 15px;
 margin-bottom: 30px;
 margin-right: auto;
 margin-left: aute
} 
.field button {
 width: 200px;
 height: 40px;
 background-color: red;
 border: 2px solid red;
 color: white;
 padding: auto;
 text-align: center;
 display: block;
 font-size: 15px;
 margin-bottom: 30px;
 margin-top: 20pk;
 margin-right: auto;
 margin-left: auto;
 cursor: pointer;
}
</style>
