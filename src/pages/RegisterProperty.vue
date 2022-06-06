<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 600px">
      <form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="title"
          label="title"
          hint="the one you registered with"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'type email/username']"
        />

        <q-input
          filled
          v-model="description"
          label="description"
          type="textarea"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'type password']"
        />

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
  </q-page>
</template>

<script>
import { defineComponent, ref, toRef, unref } from "vue";
import { LocalStorage, SessionStorage } from "quasar";
import { data } from "autoprefixer";
import { useQuasar } from "quasar";

export default {
  name: "RegisterProperty",
  data() {
    return {
      name: ref(""),
      description: ref(""),
      title: ref(""),
    };
  },
  methods: {
    onSubmit() {
      let $q = useQuasar();
      let arr = JSON.parse(LocalStorage.getItem("property") || "[]");
      let owner = SessionStorage.getItem("user");
      let property = {
        description: this.description,
        title: this.title,
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
      this.$router.push("/");
    },
  },
};
</script>

<style>
/* @import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities"; */
</style>
