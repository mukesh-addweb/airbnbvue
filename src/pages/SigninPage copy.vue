<template>
  <q-page class="flex flex-center vm--container">
    <div class="q-pa-md" style="min-width: 600px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="email"
          label="email"
          hint="the one you registered with"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'type email/username']"
        />

        <q-input
          filled
          v-model="password"
          label="password"
          type="password"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'type password']"
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
  </q-page>
</template>

<script>
import { defineComponent, ref, unref } from "vue";
import { LocalStorage, SessionStorage } from "quasar";

export default defineComponent({
  name: "SigninPage",
  data() {
    return {
      email: ref(""),
      password: ref(""),
    };
  },
  methods: {
    onSubmit() {
      let arr = JSON.parse(LocalStorage.getItem("user") || "[]");
      let user = {
        email: this.email,
        TOKEN: "ejy2309jsdjfaljfa_8990ldfjl",
      };
      // LocalStorage.remove("name");
      arr.push(user);
      SessionStorage.set("user", user);
      setTimeout(() => {
        this.$router.push("/");
      }, 1000);
    },
  },
});
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

.vm--container {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
}
</style>
