import React, {useContext} from 'react'
import { ageContext } from '.';
import { exchangeAge } from '../age/action'

const ItemLogin = () => {
    const itemContext = useContext(ageContext);
    return <div>
       <div>我是子组件年龄:{itemContext.state.age}</div>
       <button onClick={()=>{
            itemContext.dispatch(exchangeAge(6))
        }}>子组件修改年龄6</button>
    </div>
}

export default ItemLogin