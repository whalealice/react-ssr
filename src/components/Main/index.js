import React, { Component, useReducer, useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import styles from './styles.less'

const arr = new Array(100)
arr.fill(1)

const Main = () => {
  return <div className={styles.boxWrap}>
    <div className={styles.ulWrap}>
      {arr.map((item,index)=>{
        return <div>{index}</div>
      })}
      
    </div>
  </div>;
};
export default Main