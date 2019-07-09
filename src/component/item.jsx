import React, { Component } from 'react'
import {Checkbox} from 'antd'
import {connect} from 'react-redux'
// import {CHANGE_NUM,CHECK_ONOE} from '../store/reducer-type'
import {bindActionCreators} from 'redux'
import action from '../store/action'
 class Item extends Component {
    
    render() {
        let {item}=this.props
        console.log(this.props)
        return (
            <div className="dev">
                <h3>
                <Checkbox checked={item.checked} onChange={()=>this.check(item.id,item.checked)}></Checkbox>
                {item.title}</h3>
                    <ul className="bottom">
                        <li>
                        <Checkbox checked={item.checked} onChange={()=>this.check(item.id,item.checked)}></Checkbox>
                        </li>
                        <li>
                            <img src={item.imgPic} alt=""/>
                        </li>
                        <li>  
                            <p>{item.des}</p>
                            <p className="price">￥{item.price}</p>
                            <p className="btn">
                                <button onClick={()=>this.clickitem(item.num,item.id,true)}>-</button>
                                <button>{item.num}</button>
                                <button onClick={()=>this.clickitem(item.num,item.id,false)}>+</button>
                            </p>
                        </li>   
                    </ul>
            </div>
        )
    }
    clickitem=(num,id,flag)=>{
        if(flag){
            if(num>1){
            num=num-1
            }
        }else{
            num=num+1
        }
        this.props.clickNum(num,id)
    }
    //单个选中
    check=(id,checked)=>{
        this.props.checkone(id,!checked)
    }
}
export default connect((state)=>{
    return{
        data:state.shop.data
    }
},(dispatch)=>{
    return bindActionCreators(action,dispatch)
    // return{
    //     clickNum(num,id){
    //         dispatch({type:CHANGE_NUM,num,id})
    //     },
    //     checkone(id,checked){
    //         dispatch({type:CHECK_ONOE,id,checked})
    //     }
    // }
})(Item)
