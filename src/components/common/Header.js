import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.css'

const Header = (props) => {
    if(props.staticContext){
        props.staticContext.css.push(styles._getCss())
    }
    return <div className={styles.test}>
        <Link to="/">Home222</Link>  +++++++  
        <Link to="/login">Login</Link>
    </div>
}

export default Header