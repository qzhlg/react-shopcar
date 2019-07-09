import React, { Component } from 'react'

import Foot from '../component/foot'
import {connect} from 'react-redux'

import Item from '../component/item'
import {Checkbox} from 'antd'
import {bindActionCreators} from 'redux'
import action from '../store/action'
 class Shopcar extends Component {
    render() {
        let {data,checkAll,money}=this.props
          console.log(this.props)
        return (
            <div className="wrap">
               <div className="head">
                   <h2>
                       <span>购物车</span>
                       <span onClick={this.delete}>管理</span>
                   </h2>
               </div>
               <main className="main">
               <div className="box">
                    {data.map((item,index)=><Item key={index} item={item}></Item>)}
                </div>
               </main>
               <div className="cum">
                   <span>
                  <Checkbox checked={checkAll} onChange={()=>this.checkEd()}>全选</Checkbox>
                   </span>
                    <span>
                        <b>{money}</b>
                        合计</span>
                    </div>
                <Foot/>
            </div>
        )
    }
    componentDidMount(){
        this.props.getdata()
    }
    checkEd=()=>{
        let {checkAll}=this.props
        this.props.checkall(!checkAll)
    }
    delete=()=>{
        this.props.del()
    }
}
export default connect((state)=>{
    return {
        data:state.shop.data,
        checkAll:state.shop.checkAll,
        money:state.shop.money
    }
},(dispatch)=>{
    return  bindActionCreators(action,dispatch)  
})(Shopcar)