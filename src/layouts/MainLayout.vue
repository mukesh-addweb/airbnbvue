<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Addweb Booking</q-toolbar-title>
        <div>
          <q-btn
            v-if="isLoggedIn"
            label="Register Property"
            type="submit"
            color="accent"
            @click="showRegistry = true"
          />
          <q-btn
            v-if="!isLoggedIn"
            label="Login"
            type="submit"
            color="primary"
            @click="showSignIn = true"
          />
          <q-btn
            v-if="isLoggedIn"
            label="signOut"
            type="submit"
            color="secondary"
            @click="signOut"
          />
          <q-btn
            v-else
            label="signup"
            type="submit"
            color="secondary"
            @click="showSignUP = true"
          />
          <div></div>
        </div>
      </q-toolbar>
    </q-header>
    <!-- <GMapMap :center="center" :zoom="10" style="width: 100vw; height: 100vw" /> -->

    <q-bar>
      <q-btn dense flat round icon="lens" size="8.5px" color="red" />
      <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
      <q-btn dense flat round icon="lens" size="8.5px" color="green" />
      <div class="col text-center text-weight-bold">My-App</div>
    </q-bar>
    <q-page-container>
      <vue-final-modal
        v-model="showRegistry"
        classes="modal-container"
        content-class="modal-content"
      >
        <span class="modal__title">Register a property</span>
        <div class="q-pa-md" style="max-width: 600px">
          <form
            @submit="onRegisterProperty"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="title"
              label="title"
              hint="the one you registered with"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'type email/username',
              ]"
            />

            <q-input
              filled
              v-model="description"
              label="description"
              type="textarea"
              lazy-rules
              :rules="[
                (val) => (val !== null && val !== '') || 'type password',
              ]"
            />
            <!-- <q-input
              filled
              v-model="lat"
              label="Latitude"
              type="text"
              lazy-rules
              :rules="[
                (val) => (val !== null && val !== '') || 'type password',
              ]"
            />
            <q-input
              filled
              v-model="lng"
              label="Logitude"
              type="text"
              lazy-rules
              :rules="[
                (val) => (val !== null && val !== '') || 'type password',
              ]"
            /> -->

            <q-uploader
              style="max-width: 300px"
              url="http://localhost:9000/upload"
              label="Upload your image"
              multiple
              accept=".jpg, image/*"
              @rejected="onRejected"
            />

            <q-toggle v-model="accept" label="I accept the license and terms" />

            <div>
              <q-btn label="Register" type="submit" color="primary" />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </form>
        </div>
      </vue-final-modal>
      <router-view />
    </q-page-container>

    <!-- the login page -->
    <q-page-container>
      <vue-final-modal
        v-model="showSignIn"
        classes="modal-container"
        content-class="modal-content"
      >
        <span class="modal__title">Sign In</span>
        <div class="q-pa-md" style="max-width: 600px">
          <q-form @submit="onSignIn" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="email"
              label="email"
              hint="the one you registered with"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'type email/username',
              ]"
            />

            <q-input
              filled
              v-model="password"
              label="password"
              type="password"
              lazy-rules
              :rules="[
                (val) => (val !== null && val !== '') || 'type password',
              ]"
            />

            <q-toggle v-model="accept" label="I accept the license and terms" />

            <div>
              <q-btn label="Login" type="submit" color="primary" />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </div>
      </vue-final-modal>
      <router-view />
    </q-page-container>

    <!-- The signup page  -->
    <q-page-container>
      <vue-final-modal
        v-model="showSignUP"
        classes="modal-container"
        content-class="modal-content"
      >
        <span class="modal__title">Sign up</span>
        <div class="q-pa-md" style="max-width: 600px">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="name"
              label="full name "
              hint="the one you registered with"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'type email/username',
              ]"
            />

            <q-input
              filled
              v-model="email"
              label="email"
              hint="the one you registered with"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'type email/username',
              ]"
            />

            <q-input
              filled
              v-model="password"
              label="password"
              type="password"
              lazy-rules
              :rules="[
                (val) => (val !== null && val !== '') || 'type password',
              ]"
            />

            <q-toggle v-model="accept" label="I accept the license and terms" />

            <div>
              <q-btn label="Login" type="submit" color="primary" />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </div>
      </vue-final-modal>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { LocalStorage, SessionStorage } from "quasar";
import { useQuasar } from "quasar";
import { route } from "quasar/wrappers";
import router from "src/router";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    let isLoggedIn = SessionStorage.has("user");
    let showRegistry = ref(false);
    let showSignIn = ref(false);
    let showSignUP = ref(false);
    let name = ref("");
    let description = ref("");
    let title = ref("");
    let email = ref("");
    let password = ref("");
    let lat = ref("");
    let lng = ref("");
    const someMethod = () => {
      showRegistry = true;
    };
    const closeRegistry = () => {};
    const onRegisterProperty = () => {
      console.log("the func callx");
      let $q = useQuasar();
      let arr = JSON.parse(LocalStorage.getItem("property") || "[]");
      let owner = SessionStorage.getItem("user");
      let property = {
        id: title.value+'Id',
        description: description.value,
        title: title.value,
        lat: lat.value,
        lng: lng.value,
        ownerId: owner.id,
        owner: owner.email,
      };
      // $q.notify({
      //   position: "top-right",
      //   message: "successfully create a property",
      //   timeout: 3000,
      // });
      // LocalStorage.remove("name");
      arr.push(property);
      LocalStorage.set("property", JSON.stringify(arr));
      window.location.reload();
      // this.$router.push("/");
    };

    const onSignIn = () => {
      let arr = JSON.parse(LocalStorage.getItem("user") || "[]");
      let user = {
        email: email.value,
        TOKEN: "ejy2309jsdjfaljfa_8990ldfjl",
      };
      // LocalStorage.remove("name");
      arr.push(user);
      SessionStorage.set("user", user);
      window.location.reload();
    };

    const onSignUp = () => {
      let arr = JSON.parse(LocalStorage.getItem("user") || "[]");
      let user = {
        id: name.value+'Id',
        name: name.value,
        email: email.value,
        password: password.value,
      };
      // LocalStorage.remove("name");
      arr.push(user);
      LocalStorage.set("user", JSON.stringify(arr));
      window.location.reload();
    };

    const signOut = () => {
      SessionStorage.remove("user");
      window.location.reload();
    };
    // const isLoggedIn = SessionStorage.getItem("user");
    // console.log(SessionStorage.getItem("user"));
    return {
      someMethod,
      onRegisterProperty,
      onSignIn,
      onSignUp,
      signOut,
      showRegistry,
      showSignIn,
      showSignUP,
      name,
      description,
      title,
      email,
      password,
      isLoggedIn,
      lat,
      lng,
    };
  },
});
</script>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>
