import React, {useContext} from 'react'
import { NameContext } from '.';
import {exchange} from '../name/action'

const ItemLogin = () => {
    const itemContext = useContext(NameContext);
    return <div>
       <div>我是子组件名字:{itemContext.state.name}</div>
       <button onClick={()=>{
            itemContext.dispatch(exchange('angel'))
        }}>子组件修改名字</button>
    </div>
}

export default ItemLogin