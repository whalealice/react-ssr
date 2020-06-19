import React from 'react'
import { Route } from 'react-router-dom'
import App from './App'
import Main from './components/Main'
import NotFound from './components/NotFound'

import { Home } from './components/Home'
import { Login }  from './components/Login'

export default [
    {
        path: '/',
        component: App,
        routes: [
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
                loadData: Home.loadData, 
                key: 'login',
            },
            {
                path: '/main',
                component: Main,
                exact: true,
            },
            {
                component: NotFound
            }
        ]
    },
   
]


// export default (
//     <div>
//         <Route path='/' exact component={Home}></Route>
//         <Route path='/login' exact component={Login}></Route>
//     </div>
// )