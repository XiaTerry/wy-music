<template>
  <div id="app">
      <router-view/>
      <PlayerBar ref="player" v-show="isShow"></PlayerBar>
  </div>
  
</template>
<script>
import "../src/common/scss/reset.scss"
import PlayerBar from "../src/components/player/PlayerBar.vue"
export default {
  components:{
    PlayerBar
  },
  data () {
    return {
      isShow:true
    }
  },
  mounted(){
    
  }
}
</script>
<style lang="scss" scoped>
$background:red;
html{
  font-size: 16px !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
