
import React, {useState,useEffect} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { exchange, getHomeList } from '../state/action'
import styles from './style.css'

const Home = (props) => {
   
    const { exchange, getHomeList } = props
    const homeList = props.homeList
    useEffect(()=>{
        getHomeList()
    }, [])
    return <div>
        <br/>
        <div className={styles.test}>这里是store数据name: {props.name} </div>
        <button onClick={()=>{
            exchange("修改后名字AAA")
        }}>修改名字</button>
        {homeList && homeList.map((item,index)=>{
            return (
                <div key={item.key}>
                    <span>{item.key}</span>
                   
                    <span styles={{marginLeft: '10px'}}> {item.value}</span>
                </div>
            )
        })}
    </div>
}
Home.loadData = (store)=>{
    // 负责在服务器端渲染之前，把这个路由需要的数据提前加载好
    return store.dispatch(getHomeList())
}

const mapStateToProps = (state)=>{
    return {
        name: state.homeReducer.name,
        homeList: state.homeReducer.homeList,
    }
}
const mapDispatchToProps = (dispatch) => {
    const methods = {
        exchange,
        getHomeList,
    }
    return { ...bindActionCreators(methods, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)