import React from 'react';
//天线宝宝
import { connect } from 'react-redux';
import { increment, decrement } from './store/count'
const App = (props) => {
  const {count, increment} = props;
  // 中央状态请到本地？
  return (
    <>
      计数：{count}
      <button onClick={() => increment()}> 加1</button>
    </>
  )
}
// redux state 映射到 props
const mapStateToProps = (state) => {
  return {
    count: state.counter.value
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
  }
}

// 高阶组件
export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);