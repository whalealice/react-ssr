import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Login }  from './components/Login'

export default [
    {
        path:'/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home',
        // routes: [
        //     {
        //         path:'/test',
        //         component: Login,
        //         key: 'test',
        //         exact: true,
        //     }
        // ]
    },
    {
        path:'/login',
        component: Login,
        exact: true,
        // loadData: Home.loadData
        key: 'login',
    },
]


// export default (
//     <div>
//         <Route path='/' exact component={Home}></Route>
//         <Route path='/login' exact component={Login}></Route>
//     </div>
// )