<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Addweb Booking</q-toolbar-title>

        <div>
          <router-link :to="{ path: '/register-property' }"
            ><q-btn label="Register Property" type="submit" color="accent"
          /></router-link>
          <router-link :to="{ path: '/signin' }"
            ><q-btn label="Login" type="submit" color="primary"
          /></router-link>
          <router-link :to="{ path: '/signup' }"
            ><q-btn label="signup" type="submit" color="secondary"
          /></router-link>
          <div></div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { LocalStorage, SessionStorage } from "quasar";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    // const isLoggedIn = SessionStorage.getItem("user");
    // console.log(SessionStorage.getItem("user"));
    // return {
    //   isLoggedIn,
    // };
  },
});
</script>
