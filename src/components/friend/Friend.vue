<template>
  <div class="friend">
    <Vheader></Vheader>
    <h1>朋友</h1>
  </div>
</template>

<script>
import Vheader from '../v-header/V-header.vue';

export default {
  components: {
    Vheader,
  },
};
</script>
<style lang="scss" scoped>
.friend {
  margin-top: 1.75rem;
  padding: 0.5rem;
}
</style>
