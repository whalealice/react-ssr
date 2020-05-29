import React from 'react'
import Header from '../../common/Header'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { exchange } from '../state/action'

const Home = (props) => {
    console.log('props', props)
    const {exchange} =props
    return <div>
        <Header/>
        <br/>
        <div>这里是store数据name: {props.name} </div>
        <button onClick={()=>{
            exchange("修改后名字AAA")
        }}>修改名字</button>
    </div>
}

const mapStateToProps = (state)=>{
    return state.homeReducer
}
const mapDispatchToProps = (dispatch) => {
    const methods = {
        exchange,
    }
    return { ...bindActionCreators(methods, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)