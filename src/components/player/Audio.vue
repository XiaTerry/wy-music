<template>
    <div>
        
    </div>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    
    computed:{
        ...mapGetters([
        'nowIndex',
        'musicList',
        'currentSongId',
        'musicSrc',
        'imgSrc',
    ])},
}
</script>
