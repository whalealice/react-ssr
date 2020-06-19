import React, {Component, useReducer, useState, useContext} from 'react'
import { Redirect } from 'react-router-dom'

class Main extends Component {
    constructor() {
      super();
      this.state = {
        val: 0,
        isLogin: false
      };
    }
    
    render() {
      if(!this.state.isLogin){
        return <Redirect to='/'/>
    }
      return <div>
          1111
      </div>;
    }
  };
export default Main