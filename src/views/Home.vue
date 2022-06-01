<template>
  <div class="home">
    <div class="header">
      <button @click="showRegister = !showRegister">Register</button>
      <button @click="showLogin = !showLogin">login</button>
      <button @click="showAddProperty = !showAddProperty">Add Property</button>
    </div>



    <!-- //login components -->
    <div class="Register" v-if="showRegister">
      <form action="action_page.php">
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" id="name" required>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
    <hr>

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button type="submit" class="registerbtn">Register</button>
  </div>

  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</form>
</div>


<!-- login form -->

<div class="Login" v-if="showLogin">
      <form action="action_page.php">
  <div class="container">
    <h1>Login</h1>
    <p>Please fill in this form to login</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

    <!-- <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> -->
    <button type="submit" class="registerbtn">Login</button>
  </div>

  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</form>
</div>


<!-- add property form -->

<div class="Register" v-if="showAddProperty" @submit.prevent="addProperty">
      <form action="action_page.php">
  <div class="container">
    <h1>Add Property</h1>
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

    <button class="registerbtn">Add property</button>
  </div>

</form>
</div>

    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

<!-- dashboard -->

<div v-if="showProperty">
  <div class="properties">
    <property-card :demodata='property' v-for="(property,index) in demodata" :key="index" />
  </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import propertyCard from '@/components/propertyCard.vue'
import PropertyCard from '../components/propertyCard.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    propertyCard
  },
  data(){
    return{
      showLogin: false,
      showRegister: false,
      showProperty: true,
      showAddProperty: false,

      pName: '',
      pAddress: '',
      pDescription: '',
      pImage: '',

      demodata: [
        {
          name: 'villa1',
          address: '123 lorem ipsum',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/944d56fa-e9a6-48fb-a9c5-e4e3778042d7?im_w=720',
        },
        {
          name: 'villa1',
          address: '123 lorem ipsum',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/944d56fa-e9a6-48fb-a9c5-e4e3778042d7?im_w=720',
        },
        {
          name: 'villa1',
          address: '123 lorem ipsum',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/944d56fa-e9a6-48fb-a9c5-e4e3778042d7?im_w=720',
        },{
          name: 'villa1',
          address: '123 lorem ipsum',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/944d56fa-e9a6-48fb-a9c5-e4e3778042d7?im_w=720',
        },
        {
          name: 'villa1',
          address: '123 lorem ipsum',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/944d56fa-e9a6-48fb-a9c5-e4e3778042d7?im_w=720',
        }
      ]
    }
  },
  
  methods:{
    addProperty(){
      const property = {
        id: this.pName+'Id',
        name: this.pName,
        address: this.pAddress,
        description: this.pDescription,
        img: this.pImage
      }
      this.demodata.push(property)
      console.log(this.demodata)

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

/* Set a style for the submit/register button */
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
</style>
