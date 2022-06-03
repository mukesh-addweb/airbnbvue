<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <template v-for="(propertyInfo, index) in data" :key="index">
        <hotel-card
          :data="propertyInfo"
          @bookProperty="bookProperty"
          :isLoggedIn="isLoggedIn"
          :isBooked="propertyInfo.tenant"
        />
      </template>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { LocalStorage, SessionStorage } from "quasar";
import HotelCard from "src/components/HotelCard.vue";
console.log(SessionStorage.has("user"));
export default defineComponent({
  name: "IndexPage",
  components: {
    HotelCard,
  },
  data() {
    return {
      properties: [],
      data: JSON.parse(LocalStorage.getItem("property") || "[]"),
      isLoggedIn: SessionStorage.has("user"),
      // data: [{ title: "good looking house", owner: "some rich guy" }],
    };
  },
  methods: {
    bookProperty(property) {
      console.log("works", property);
      let allprops = JSON.parse(LocalStorage.getItem("property") || "[]");
      // allprops.find(property.name);

      let i = allprops.findIndex((x) => x.title === property.title);
      allprops[i].tenant = SessionStorage.getItem("user").email;
      LocalStorage.set("property", JSON.stringify(allprops));
    },
  },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
