<template>
  <div class="user">
    <div class="user__head">
       <img :src="user.image" :alt="user.name + 'icon'" />
      <div class="user__info">
        <h1 class="user__name">{{ user.name }}</h1>
      </div>
    </div>
    <div class="user__body">
      <ul class="date-list">
        <li v-for="(date, index) in dates" :key="index">
          <button @click="changeDate(date.toLowerCase())" class="date-list__button">{{ date }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import jeremyImage from '@/assets/image-jeremy.png';
export default {
  data() {
    return {
      user: {
        image: jeremyImage,
        name: 'Jeremy Robson',
      },
    };
  },

  methods: {
    changeDate(date) {
      this.$store.dispatch('changeDate', date);
      console.log(this.$store.state.currentDate);
    },
  },

  computed: {
    dates() {
      return this.$store.state.dates;
    },
  },
};
</script>

<style lang="scss">
@forward 'styles';
</style>
