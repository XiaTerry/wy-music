<template>
    <div class="friend">
        <PlayerBar></PlayerBar>
        <h1>朋友</h1>
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
.friend{
    margin-top: 1.75rem;
    padding: 0.5rem;
}
</style>
