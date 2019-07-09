import React, { Component } from 'react'

export default class Head extends Component {
    static defaultProps={
        title:"淘宝"
    }
    render() {
        let {title}=this.props
        return (
         <header className="header">
             <span>{title}</span>
             <input type="text"/>
         </header>
        )
    }
}
