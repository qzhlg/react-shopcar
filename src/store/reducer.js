import {INIT_DATA,CHANGE_NUM,CHECK_ONOE,CHECKED_ALL,DELETE_DAT} from './reducer-type'
let data={ 
    data:[],//数据列表
    checkAll:false, //全选
    money:0   //总价
}
//获取索引
function getindex(data,id){
    return data.findIndex(item =>item.id===id)
}
//计算总价
function total(data){
    return data.reduce((pre,nex)=>{
       return pre+=nex.checked?nex.price*nex.num:0
    },0)
}
let shop=(state=data,action)=>{
    switch (action.type) {
        case INIT_DATA:{
            state.data=action.data
            state.data.map(item=>{
                return item.checked=false
            })
            return {...state,data:[...state.data]}
        }
        case CHANGE_NUM:{
            let index=getindex(state.data,action.id)
            let target=state.data[index]
            target.num=action.num
            state.data[index]={...target}
            state.money=total(state.data)
            return{...state,data:[...state.data]}
        }
        case CHECK_ONOE:{
            let index=getindex(state.data,action.id)
            let target=state.data[index]
            target.checked=action.checked
            state.data[index]={...target}
            state.money=total(state.data)
            return{...state,data:[...state.data]}
        }
        case CHECKED_ALL:{
            state.checkAll=action.checkAll
            state.data.map((item)=>{
                return item.checked=state.checkAll
            })
            state.money=total(state.data)
            return {...state,data:[...state.data]}
        }
        case DELETE_DAT:{
            let index=getindex(state.data,action.id)
            state.data.splice(index,1)
            return {...state,data:[...state.data]}
        }
        default:
          return{...state}
    }
}
export default shop