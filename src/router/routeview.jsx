import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
export default function Routeview(props) {
    let {route}=props
 
    return (
        <Switch>
            {  
               route.map((item,index)=>{
                    if(!item.redirect){
                       return <Route path={item.path}  key={index} render={(props)=>{
                           return <item.component route={item.children} {...props}></item.component>
                       }}></Route>
                    }else{
                     return  <Redirect key={index} from={item.path} to={item.redirect}></Redirect>
                    }
                })
            }
        </Switch>
    )
}
