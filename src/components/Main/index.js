import React, {Component, useReducer, useState, useContext} from 'react'


class Main extends Component {
    constructor() {
      super();
      this.state = {
        val: 0
      };
      this.onClickBtn = this.onClickBtn.bind(this)
    }
    
    componentDidMount() {
        this.setState(this.increment)
        this.setState(this.increment)
        console.log('aaa11', this.state.val);
    //   this.setState({val: this.state.val + 1});
    //   console.log(this.state.val);    // 第 1 次 log
  
    //   this.setState({val: this.state.val + 1});
    //   console.log(this.state.val);    // 第 2 次 log
  
    //   setTimeout(() => {
    //     this.setState({val: this.state.val + 1});
    //     console.log(this.state.val);  // 第 3 次 log
  
    //     this.setState({val: this.state.val + 1});
    //     console.log(this.state.val);  // 第 4 次 log
    //   }, 0);
    }
    increment(state, props) {
        return {
          count: state.val + 1
        }
      }
    onClickBtn() {
        
        // setTimeout(() => {
        //     this.setState({ val: this.state.val + 1 });
        //     console.log('aaa', this.state.val);
        //     this.setState({ val: this.state.val + 1 });
        //     console.log('bbb', this.state.val);
        // }, 0)
    }
    render() {
      return <div>
          <button onClick={this.onClickBtn}>按钮</button>
      </div>;
    }
  };
export default Main