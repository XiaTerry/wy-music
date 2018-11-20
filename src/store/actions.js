import * as types from './mutations-type'
export const selectPlay = function({commit},index){
    commit(types.SET_CURRENT_INDEX,index)
}
export const getMusicList= function({commit},list){
    commit(types.SET_MUSIC_LIST,list)
}
// export const selectCurrentId = function({commit},id){
//     commit (types.SET_CURRENT_ID,id)
// }