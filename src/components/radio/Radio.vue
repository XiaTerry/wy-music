<template>
    <div class="radio">
        <player-bar></player-bar>
        <h1>电台</h1>
        <vheader></vheader>
    </div>
</template>

<script>
import PlayerBar from "../player/PlayerBar.vue";
import Vheader from "../v-header/V-header.vue";
export default {
    components:{
        PlayerBar,
        Vheader
    }
}
</script>
<style lang="scss" scoped>
.radio{
    margin-top: 1.75rem;
    padding: 0.5rem;
}
</style>
