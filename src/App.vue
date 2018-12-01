<template>
  <div id="app">
      <router-view/>
      
      
      <Player v-show="showPlayer"></Player>
      <PlayerBar :Audio="audio" v-show="isShow" ></PlayerBar>
  </div>
  
</template>
<script>
import "../src/common/scss/reset.scss"
import PlayerBar from "../src/components/player/PlayerBar.vue"
import Player from "../src/components/player/Player.vue"
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  components:{
    PlayerBar,
    Player
  },
  data () {
    return {
      isShow:true,
      audio:null
    }
  },
  computed:{
    ...mapGetters([
      'showPlayer'
    ])
  },
  mounted(){
    this.audio = this.$children[1].$refs.musicAudio
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
