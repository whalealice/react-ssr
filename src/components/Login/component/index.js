import React, {createContext, useReducer, useState, useEffect} from 'react'
import ItemName from './ItemName'
import ItemAge from './ItemAge'
import nameReducer, { createInitialState } from '../name/reducer'
import { exchange } from '../name/action'

import ageReducer, { createOtherInitialState } from '../age/reducer'
import { exchangeAge } from '../age/action'

import styles from './style.css'
export const NameContext = createContext(null);
export const ageContext = createContext(null)


const initialState = {count: 0};
function countReducer(state, action) {
    switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
           return {count: state.count - 1};
        default:
            throw new Error();
    }
}

const Login = (props) => {
    const [age, setAge] = useState(18)
    const [countState, countDispatch] = useReducer(countReducer, initialState);
    const [nameState, nameDispatch] = useReducer(nameReducer, createInitialState());
    const [ageState, ageDispatch] = useReducer(ageReducer, createOtherInitialState());
    useEffect(() => {
        document.title = `You clicked ${countState.count} times`;
        setAge(countState.count)
    }, [countState.count]);
    
    const onChangeAge = ()=>{
        setAge(28)
    }
    if(props.staticContext){
        props.staticContext.css.push(styles._getCss())
    }
    return <div>
        <div className={styles.test}>Login</div> 
        <div>年龄:{age}</div>
        <button onClick={onChangeAge}>设置新的年龄</button>
        <br/>
        <br/>
        <div>计数器：{countState.count}</div>
        <button onClick={() => countDispatch({type: 'increment'})}>+</button>
        <button onClick={() => countDispatch({type: 'decrement'})}>-</button>
        <br/>
        <br/>
        <div>名字：{nameState.name}</div>
        <button onClick={()=>{
            nameDispatch(exchange('柏帆'))
        }}>父组件修改名字</button>
        <br/>
        <NameContext.Provider value={{state: nameState, dispatch: nameDispatch}}>
            <ItemName/>
        </NameContext.Provider>
        <br/>
        <br/>
        <div>年龄：{ageState.age}</div>
        <button onClick={()=>{
            ageDispatch(exchangeAge(8))
        }}>父组件修改年龄8</button>
        <br/>
        <ageContext.Provider value={{state: {age}, dispatch: ageDispatch}}>
            <ItemAge/>
        </ageContext.Provider>
    </div>
}

export default Login