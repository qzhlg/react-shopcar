import axios from 'axios'
import {CHECKED_ALL,DELETE_DAT,CHANGE_NUM,CHECK_ONOE,INIT_DATA} from './reducer-type'
let getdata=()=>{
    return (dispatch)=>{
        axios.get("/getshopdata").then(res =>{
            let data=res.data.data
            dispatch({type:INIT_DATA,data})
        })
    }
}
let checkall=(checkAll)=>{
    return {type:CHECKED_ALL,checkAll}
}
let clickNum=(num,id)=>{
    return {type:CHANGE_NUM,num,id}
}
let checkone=(id,checked)=>{
    return {type:CHECK_ONOE,id,checked}
}
let del=()=>{
    return {type:DELETE_DAT}
}

export default{
    getdata,
    checkall,
    clickNum,
    checkone,
    del
}