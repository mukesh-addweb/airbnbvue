<template>
    <div class="card" v-if="demodata">
  <img :src="demodata.img" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>{{ demodata.name }}</b></h4>
    <p>{{demodata.address}}</p>
    <p>{{demodata.description}}</p>
    <q-btn color="white" text-color="black" class="q-ma-sm" @click="$emit('bookProperty', demodata)" v-if="isLoggedIn">Book property</q-btn>
  </div>
</div>
</template>

<script>
export default {
  name: 'propertyCard',
  props:{
      demodata: Object,
      isLoggedIn: Boolean,
  }
}
</script>

<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 300px;
  margin: 50px 70px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>