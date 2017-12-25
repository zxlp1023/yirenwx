<template>
  <div class="class-b">
    <input type="search" @keyup.enter = "onEnter" v-model="input_name">
    <ul>
      <li v-for="item in items" :clas="{'class-a':item.finish}"  @click="change(item)">{{item.text}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'SearchCase',
  data () {
    return {
      input_name: '',
      items: localStorage_work.fetch(),
      
    }
  } 
  
}
</script>
