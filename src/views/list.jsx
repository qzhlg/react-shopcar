import React, { Component } from 'react'
import {NavLink,Switch} from 'react-router-dom'
import Routeview from '../router/routeview'
export default class List extends Component {
    render() {
        console.log(this.props)
        let {route}=this.props
        return (
            <div className="wrap">
                <header className="header" style={{background:"#fff"}}>
                      <NavLink to="/list/left">左侧数据</NavLink>
                     <NavLink to="/list/right">右侧数据</NavLink>
                </header>
                
                <Switch>
                <Routeview route={route}></Routeview>
                </Switch>
            </div>

        )
    }
}
