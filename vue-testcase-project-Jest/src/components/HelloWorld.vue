<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>Working</div>
    <div class="test_text">{{ test }}</div>
    <button @click="myFunc">Click</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      test: 'init',
    };
  },
  props: {
    msg: String
  },
  methods: {
    myFunc() {
      console.log('Working');
    },
    sorting() {
      let n = arr.length; 
      for (let i = 0; i < n-1; i++){
        for (let j = 0; j < n-i-1; j++) {
          if (arr[j] > arr[j+1]) { 
            let temp = arr[j]; 
            arr[j] = arr[j+1]; 
            arr[j+1] = temp; 
          } 
        }
      }
    }
  },
  created() {
    this.test = "Hello";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
