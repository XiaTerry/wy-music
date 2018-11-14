import * as types from './mutations-type'
const mutations = {
    [types.SET_CURRENT_INDEX] (state,index) {
        state.nowIndex+=index
    }
}
export default mutations