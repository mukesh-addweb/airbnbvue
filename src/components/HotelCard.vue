<template>
  <q-card class="my-card">
    <img src="https://cdn.quasar.dev/img/mountains.jpg" />

    <q-card-section>
      <div class="text-h6">{{ data.title }}</div>
      <div class="text-subtitle2">by {{ data.owner }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      Earn USD Cash Rewards. Book your luxury Hotel online. Great rates. Low
      rates. Book now, save more! Best Rate Guarantee. Friendly Comforts.
      Personalized Service.
    </q-card-section>
    <q-card-actions v-if="isLoggedIn && !isBooked">
      <q-btn color="primary" @click="$emit('bookProperty', data)"
        >Book it</q-btn
      >
      <q-btn color="accent" flat>save</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "HotelCard",
  props: {
    data: Object,
    isLoggedIn: Boolean,
    isBooked: Boolean,
  },
};
</script>
