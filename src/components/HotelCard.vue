<template>
  <div class="q-pa-md" v-if="loading">
    <q-card style="min-width: 350px">
      <q-item>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" />
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" />
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-skeleton height="200px" square />

      <q-card-actions align="right" class="q-gutter-md">
        <q-skeleton type="QBtn" />
        <q-skeleton type="QBtn" />
      </q-card-actions>
    </q-card>
  </div>
  <q-card class="my-card" v-else>
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
    loading: Boolean,
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  min-width: 450px
</style>
