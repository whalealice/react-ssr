import React, {useReducer, useState, useContext} from 'react'
import routes from './router'
import { renderRoutes } from 'react-router-config'
import Header from './components/common/Header'

const App = (props) => {
    return <div>
        <Header/>
        {renderRoutes(props.route.routes)}
    </div>
}

export default App