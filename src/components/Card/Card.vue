<template>
  <div class="card" :class="'card--' + getBackground(this.card)">
    <img :src="getImagePath(card)" :alt="card.title" class="card__icon" aria-hidden="true" />
    <div class="card__body">
      <h2 class="card__title">{{ title }}</h2>
      <div class="card__time">
        <p>{{ timeCurrent }}hr</p>
        <p>Last {{ currentDate }} - {{ timePrevious }}hr</p>
      </div>

      <button class="card__button"><span>Edit</span></button>
    </div>
  </div>
</template>

<script>
/*<div class="card__background" :class="'card--' + getBackground(this.card)" aria-hidden="true">*/
/*<img :src="getImagePath(this.card)" alt="" />*/
/*</div>*/
export default {
  props: {
    card: { type: Object, required: true },
  },
  data() {
    return {
      backgroundHashTable: {
        work: 'lighter-red',
        play: 'soft-blue',
        study: 'light-red',
        exercise: 'light-green',
        social: 'violet',
        'self care': 'light-orange',
      },
    };
  },
  methods: {
    getBackground(card) {
      return this.backgroundHashTable[card.title.toLowerCase()];
    },

    getImagePath(card) {
      let modify = '';
      if (this.hasWhiteSpace(card.title)) {
        console.log(card.title.toLowerCase().split(' ').join('-'));
        modify = card.title.toLowerCase().split(' ').join('-');
      } else {
        modify = card.title.toLowerCase();
      }

      const path = require(`@/assets/icon-${modify}.svg`);
      return path;
    },

    hasWhiteSpace(string) {
      return string.indexOf(' ') >= 0;
    },
  },
  computed: {
    title() {
      return this.card.title;
    },
    timeCurrent() {
      const currentDate = this.$store.state.currentDate;
      return this.card.timeframes[currentDate].current;
    },
    timePrevious() {
      const currentDate = this.$store.state.currentDate;
      return this.card.timeframes[currentDate].previous;
    },
    currentDate() {
      const currentDate = this.$store.state.currentDate;
      if (currentDate == 'daily') {
        return 'day';
      }
      return currentDate.slice(0, currentDate.indexOf('ly'));
    },
  },
};
</script>

<style lang="scss">
@forward 'styles';
</style>
