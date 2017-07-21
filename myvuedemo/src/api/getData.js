import api from './apiList'
import axios from 'axios'
import querystring from 'querystring'

//通过axios发送请求
//getData('indexinfo.php','get',{username:'user'}).then(res=>{})
export default (pathName, type, queryData) => axios[type](api[pathName], querystring.stringify(queryData))