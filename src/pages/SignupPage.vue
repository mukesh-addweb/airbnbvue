<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 600px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="name"
          label="full name "
          hint="the one you registered with"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'type email/username']"
        />

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
  name: "SignupPage",
  data() {
    return {
      email: ref(""),
      name: ref(""),
      password: ref(""),
    };
  },
  methods: {
    onSubmit() {
      let arr = JSON.parse(LocalStorage.getItem("user") || "[]");
      let user = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      // LocalStorage.remove("name");
      arr.push(user);
      LocalStorage.set("user", JSON.stringify(arr));
      navigateTo({ path: "/" });
    },
  },
});
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
