
import React, { useState, useEffect, Fragment } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet'
import { exchange, getHomeList, changeLogin } from '../state/action'
import styles from './style.css'
import withStyles from '../../hooks/withStyles'

const Home = (props) => {
    withStyles(props, styles)
    const { exchange, getHomeList, changeLogin } = props
    const homeList = props.homeList
    useEffect(() => {
        getHomeList()
    }, [])

    return (
        <Fragment>
            <Helmet>
                <title>JOJO学习ssr网站-丰富多彩的咨询</title>
                <meta name="description" content="JOJO学习ssr网站-丰富多彩的咨询" />
            </Helmet>
            <div className={styles.test}>这里是store数据name: {props.name} </div>
            <button onClick={() => {
                exchange("修改后名字AAA")
            }}>修改名字</button>
            {homeList && homeList.map((item, index) => {
                return (
                    <div key={item.key}>
                        <span>{item.key}</span>

                        <span styles={{ marginLeft: '10px' }}> {item.value}</span>
                    </div>
                )
            })}
            <button onClick={() => {
                changeLogin(false)
            }}>修改login</button>
        </Fragment>
    )
}
Home.loadData = (store) => {
    // 负责在服务器端渲染之前，把这个路由需要的数据提前加载好
    return store.dispatch(getHomeList())
}

const mapStateToProps = (state) => {
    return {
        name: state.homeReducer.name,
        homeList: state.homeReducer.homeList,
        isLogin: state.homeReducer.isLogin,
    }
}
const mapDispatchToProps = (dispatch) => {
    const methods = {
        exchange,
        getHomeList,
        changeLogin,
    }
    return { ...bindActionCreators(methods, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)