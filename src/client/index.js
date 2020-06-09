
import React, { useEffect } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import routes from '../router'
import { Provider } from 'react-redux';
import { getClientStore }  from '../store/index'
 
const store = getClientStore()
console.log('11111', store.getState().homeReducer)
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    {routes.map(route => (
                        <Route {...route} />
                    ))}
                </div>
            </BrowserRouter>

        </Provider>
    )
}

ReactDom.hydrate(<App />, document.getElementById("root"))