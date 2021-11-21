<template>
  <main class="container">
    <User />

    <Routine />
  </main>
</template>

<script>
import User from '@/components/User/User.vue';
import Routine from '@/components/Routine/Routine.vue';
export default {
  name: 'App',
  components: { User, Routine },
};
</script>

<style lang="scss">
@use 'utils/colors.scss' as *;
@use 'utils/mixins.scss' as *;

body {
  background-color: $veryDarkBlue;
}

#app {
  min-height: 100vh;
  padding: 1.5em;
  padding-top: 5em;

  user-select: none;

  /* Center  */
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    flex: 1;
  }
}

.container {
  max-width: 1100px;
  gap: 1em;
  @include desktop {
    display: flex;
    align-items: stretch;
  }
  .routine {
    flex: 1;
  }
}
</style>
