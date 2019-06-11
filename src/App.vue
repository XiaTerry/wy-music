<template>
  <div id="app">
    <router-view></router-view>
    <PlayerBar></PlayerBar>
    <my-dialog></my-dialog>
  </div>
</template>

<script>
import "./common/scss/reset.scss";
import PlayerBar from "./components/player/PlayerBar.vue";
import MyDialog from "./components/com-components/MyDialog.vue";

export default {
  components: {
    PlayerBar,
    MyDialog
  }
};
</script>
<style lang="scss" scoped>
.slide-fade-enter-active {
  animation: bounce-in 1s;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transform: scale(1.5, 1.5);
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
$background: red;
html {
  font-size: 16px !important;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
