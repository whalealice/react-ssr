import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config'


export const render = (store, routes, req) => {

    const context = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>
                    {renderRoutes(routes)}
                </div>
            </StaticRouter>
        </Provider>
    ))
    return (
        `<html>
            <head>
                <title>react server</title>
            </head>
            <body>
                <div id="root">${context}</div>
                <script>
                    window.context = {
                        state: ${JSON.stringify(store.getState())}
                    }
                </script>
                <script src="./index.js"></script>
              
            </body>
        </html>`
    )


}