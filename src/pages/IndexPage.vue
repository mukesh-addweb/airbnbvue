<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md q-pl-lg q-ml-lg">
      <q-select
        rounded
        filled
        v-model="filter"
        :options="options"
        label="selectedFilter"
      />
    </div>
  </div>
  <q-page class="flexing">
    <div class="q-pa-md row items-start q-gutter-md">
      {{data}}
      <template v-for="(propertyInfo, index) in data" :key="index">
        <div>
          <hotel-card
            :data="propertyInfo"
            @bookProperty="bookProperty"
            :isLoggedIn="isLoggedIn"
            :isBooked="propertyInfo.tenant"
          />
        </div>
      </template>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { LocalStorage, SessionStorage } from "quasar";
import { useQuasar } from "quasar";
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
      loading: false,
      options: ["My Properties", "My Booked properties", "All"],
      filter: ref(null),
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
      window.location.reload();
    },
    setLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
  },
  mounted() {
    this.loading = true;
  },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px

.flexing
  display: flex
  flex-wrap: wrap

</style>
