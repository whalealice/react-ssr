import React from 'react'
import Header from './common/Header'

const Login = () => {
    return <div>
         <Header/>
       <div>Login</div> 
        <button onClick={()=>{alert('2222')}}>Login</button>
    </div>
}

export default Login