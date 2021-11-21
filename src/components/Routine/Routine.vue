<template>
  <div class="routine">
    <Card v-for="(activity, index) in routine" :key="index" :card="activity" />
  </div>
</template>

<script>
import Card from '@/components/Card/Card.vue';
export default {
  components: { Card },

  computed: {
    routine() {
      return this.$store.state.routine;
    },
  },

  mounted() {
    this.$store.dispatch('getRoutine');

    console.log(this.routine);
  },
};
</script>

<style lang="scss">
@forward 'styles';
</style>
