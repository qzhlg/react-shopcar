import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Foot extends Component {
    render() {
        return (
            <footer className="footer">
                <NavLink to='/home'>首页</NavLink>
                <NavLink to='/shopcar'>购物车</NavLink>
                <NavLink to='/list'>列表清单</NavLink>
                <NavLink to='/mine'>我的</NavLink>
                <NavLink to='/more'>更多</NavLink>
            </footer>
        )
    }
}
