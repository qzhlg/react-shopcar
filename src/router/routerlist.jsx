
import Home from '../views/home'
import Shopcar from '../views/shopcar'
import List from '../views/list'
import Mine from '../views/mine'
import Detail from '../views/detail';
import More from '../views/more'
import Login from '../views/login'
import Right from '../views/right';
import Left from '../views/left';
let route=[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/shopcar',
        component:Shopcar
    },
    {
        path:'/list',
        component:List,
        children:[
            {
                path:'/list/right',
                component:Right
            },
            {
                path:'/list/left',
                component:Left
            },{
                path:'/list',
                redirect:'/list/left'
            }
        ]
    },
    {
        path:'/mine',
        component:Mine
    },
    {
        path:'/more',
        component:More
    },
    {
        path:'/detail',
        component:Detail
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/',
        redirect:'/home'
    }
]
export default route

