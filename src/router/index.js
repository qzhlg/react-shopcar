import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import route from './routerlist'
import Routeview from './routeview'
export default function Router() {
    return (
        <BrowserRouter>
        <Routeview route={route}></Routeview>
    
        </BrowserRouter>
    )
}
