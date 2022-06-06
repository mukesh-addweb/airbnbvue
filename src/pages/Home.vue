<template>
  <div class="home">
    <div class="header">
      <q-btn color="white" text-color="black" class="q-ma-sm center-btn mann" @click="showRegister = !showRegister; showLogin=false" v-if="!isLoggedIn">Register</q-btn>
      <q-btn color="white" text-color="black" class="q-ma-sm center-btn" @click="showLogin = !showLogin; showRegister=false;" v-if="!isLoggedIn">login</q-btn>
      <q-btn color="white" text-color="black" class="q-ma-sm center-btn" @click="showAddProperty = !showAddProperty" v-if="isLoggedIn">Add Property</q-btn>
      <q-btn color="white" text-color="black" class="q-ma-sm center-btn" @click="showBookedProperties = !showBookedProperties" v-if="isLoggedIn">{{showBookedProperties?'All Properties':'Booked Properties'}}</q-btn>
      <q-btn color="white" text-color="black" class="q-ma-sm center-btn" @click="logOut" v-if="isLoggedIn">LogOut</q-btn>
    </div>
<p class="text-center text-h6 q-mt-lg" v-if="isLoggedIn && userInfo && userInfo.name">{{userInfo.name}}</p>

    <!-- register components -->
    <div class="Register" v-if="showRegister && !isLoggedIn">
      <form action="action_page.php" @submit.prevent='registerUser'>
  <div class="container">
    <h4>Register</h4>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" id="name" required v-model="nName">

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required v-model="nEmail">

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required v-model="nPassword">

    <!-- <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required v-model="nName">
    <hr> -->

    <!-- <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> -->
    <q-btn type="submit" class="registerbtn">Register</q-btn>
  </div>

  <!-- <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div> -->
</form>
</div>


<!-- login form -->

<div class="Register" v-if="showLogin && !isLoggedIn">
      <form action="action_page.php" @submit.prevent='loginUser'>
  <div class="container">
    <h4>Login</h4>
    <p>Please fill in this form to login</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required v-model="uEmail">

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required v-model="uPassword">

    <!-- <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> -->
    <q-btn type="submit" class="registerbtn">Login</q-btn>
  </div>

  <!-- <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div> -->
</form>
</div>


<!-- add property form -->

<div class="Register" v-if="showAddProperty && isLoggedIn">
      <form action="action_page.php" @submit.prevent="addProperty()">
  <div class="container">
    <h4>Add Property</h4>
    <p>Please fill in this form to add new property.</p>
    <hr>

    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" id="name" required v-model="pName">

    <label for="address"><b>Address</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required v-model="pAddress">

    <label for="description"><b>Description</b></label>
    <input type="text" placeholder="Enter Description" name="description" id="description" required v-model="pDescription">

    <label for="photo"><b>Photo</b></label>
    <input type="text" placeholder="photo url" name="photo" id="photo" required v-model="pImage">
    <hr>

    <q-btn class="registerbtn" @click="addProperty()">Add property</q-btn>
  </div>

</form>
</div>

    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

<!-- dashboard -->

<div v-if="showProperty && !showBookedProperties">
  <div class="properties">
    <property-card :demodata='property' v-for="(property,index) in demodata" :key="index" :isLoggedIn='isLoggedIn' @bookProperty='bookProperty' />
  </div>
</div>

<!-- booked properties -->
<div v-if="showBookedProperties && isLoggedIn">
  <div class="properties">
  <template v-for="(propertyInfo,index) in bookedProperties" :key="index">
    <property-card :demodata='propertyInfo.property' :isLoggedIn='false' @bookProperty='bookProperty' v-if="propertyInfo.userInfo.email == userInfo.email" />
  </template>
  </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import propertyCard from '@/components/propertyCard.vue'
import propertyCard from '../components/propertyCard.vue';
import { LocalStorage, SessionStorage } from "quasar";


// import store from '../store';

export default {
  name: 'Home',
  components: {
    propertyCard
  },
  mounted(){

    let arr = JSON.parse(LocalStorage.getItem("properties") || "[]");

    if(this.demodata.length > arr.length){

      LocalStorage.set("properties", JSON.stringify(this.demodata));
    }else {
      this.demodata = arr;
    }
    if(LocalStorage.has("bookedProperty")){
      let arr2 = JSON.parse(LocalStorage.getItem("bookedProperty") || "[]");
      this.bookedProperties = arr2;
    }
  },
  data(){
    return{
      showLogin: false,
      showRegister: !SessionStorage.has('user'),
      showProperty: true,
      showAddProperty: false,
      showBookedProperties:false,
      isLoggedIn: SessionStorage.has('user'),
      userInfo: SessionStorage.has('user')?SessionStorage.getItem("user"): null,

      pName: '',
      pAddress: '',
      pDescription: '',
      pImage: '',

      demodata: [
        {
          name: 'Light House',
          address: 'Vestervig, Denmark',
          description: "Light House consists of an entrance, a main bath room with a view and bathtub, main bedroom with a view, a kitchen/livingroom, a corridor with doors to a second bathroom, two bedrooms, and a stair to the second floor from where there are a panoramaview over Flade Lake, towards the dunes and Lodbjerg Light Tower..",
          img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-23863755/original/8d057fa4-d49b-44f8-8977-242ecad07ab6.jpeg?im_w=720',
        },
        {
          name: 'The WonderINN Mirrored Glass Cabin',
          address: 'Rælingen, Akershus, Norway',
          description: "Immerse yourself in the wilderness, still within reach of civilization WonderINN is literally a hidden gem the unique design of the mirrored glass blends into the landscape so you can retreat to comfort and luxury as you watch the world pass by.",
          img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-23863755/original/2ce81508-1182-4fdf-87b9-382867a48815.jpeg?im_w=720',
        },
        {
          name: 'villa3',
          address: '123 lorem ipsum',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img: 'https://a0.muscache.com/im/pictures/71b35a78-db84-4a86-bdef-60d9acd4999d.jpg?im_w=960',
        },{
          name: 'villa4',
          address: '123 lorem ipsum',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img: 'https://a0.muscache.com/im/pictures/miso/Hosting-44400573/original/41c4cd08-6e55-424f-a695-e102708f54d6.jpeg?im_w=720',
        },
        {
          name: 'villa5',
          address: '123 lorem ipsum',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img: 'https://a0.muscache.com/im/pictures/monet/Luxury-553449454187790697/original/475750f4-33de-4e1d-bbd7-f1939896ce9c?im_w=720',
        }
      ],

      bookedProperties: []
    }
  },
  
  methods:{
    addProperty(){
        console.log('haalo')
      const property = {
        id: this.pName+'Id',
        name: this.pName,
        address: this.pAddress,
        description: this.pDescription,
        img: this.pImage
      }

      this.demodata.push(property)
      console.log(this.demodata)
      LocalStorage.set("properties", JSON.stringify(this.demodata));
      this.showAddProperty = false
    },
    registerUser(){
      const user = {
        id: this.nName+'Id',
        name: this.nName,
        email: this.nEmail,
        password: this.nPassword,
      }
      console.log(this.$store.state.users)
      this.$store.commit('registerUser', user)
      let arr = JSON.parse(LocalStorage.getItem("user") || "[]");
      // LocalStorage.remove("name");
      arr.push(user);
      LocalStorage.set("user", JSON.stringify(arr));
      this.showRegister = false
    },
    loginUser(){
      // const users = this.$store.state.users;
      const users = JSON.parse(LocalStorage.getItem("user") || "[]");

      console.log(users)
      const index = users.findIndex(element => element.email == this.uEmail && element.password == this.uPassword);
      
      console.log(index)
      if(index !== -1){
        SessionStorage.set("user", users[index]);
        this.isLoggedIn = true;
        this.showLogin = false;
        this.userInfo = users[index];
      }
    },
    bookProperty(property){
      console.log('haalo')
      console.log(property)
      const bookedProperty = {
        bookingId: property.name + this.userInfo.id,
        userInfo: this.userInfo,
        property,
      }
      console.log(bookedProperty)
      this.bookedProperties.push(bookedProperty)
      console.log('booked properties',this.bookedProperties);
      LocalStorage.set("bookedProperty", JSON.stringify(this.bookedProperties));

    },
    logOut(){
      
      SessionStorage.remove("user");
      window.location.reload();
    }
  }
}
</script>
<style scoped>
* {box-sizing: border-box}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register q-btn */
.registerbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity:1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}

.properties {
  display: flex;
  flex-wrap: wrap;
}
.header {
    /* align-items: center; */
    margin-left: 500px;
    width: 469px;
}
.mann{
    margin-left: 90px;
}
/* .center-btn{
    margin-left: 90px;
} */
.Register{
    width: 50%;
    margin: auto;
}
</style>
