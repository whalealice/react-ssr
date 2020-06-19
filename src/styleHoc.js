
import React, { Component } from 'react'

// export default (DecoratedComponent, styles) => {
//     return (props)=> {
//         if (props.staticContext) {
//             props.staticContext.css.push(styles._getCss())
//         }
//         return <DecoratedComponent {...this.props} />
//     }
// }
const withStyles = ( props)=>{
    console.log('3333', props)

}
export default withStyles