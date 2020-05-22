import React from 'react'
import Header from './common/Header'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { exchange } from '../store/index'

const Home = (props) => {
    console.log('props', props)
    return <div>
        <Header/>
        <br/>
        <div>这里是store数据name: {props.name} </div>
        <div>welcome home1113332222!!!</div>
        <button onClick={()=>{
            props.exchange()
        }}>按钮</button>
    </div>
}

const mapStateToProps = (state)=>{
    return state
}
const mapDispatchToProps = (dispatch) => {
    const methods = {
        exchange,
    }
    return { ...bindActionCreators(methods, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)