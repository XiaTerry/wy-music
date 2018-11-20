import axios from 'axios'
import {HOST} from '../common/js/config'
export function getSearch(){
    const url = HOST+ '/search/hot'
    return axios(url)
}
export function getSearchResult(keywords){
    const url = HOST + `/search?keywords= ${keywords}`
    return axios(url)
}