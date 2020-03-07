// import { createStore, applyMiddleware } from 'redux'

/* import logger from 'redux-logger'
import thunk from 'redux-thunk' */
import { createStore, applyMiddleware } from '../components/kRedux'

//定义state初始化和修改规则，reducer是一个纯函数
function counterReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counterReducer, applyMiddleware(logger, thunk))

export default store;

//接下来实现logger和thunk中间件
//logger返回 一个dispatch,它的参数也是dispatch，这里用的是双箭头，下去双箭头还要再多看下
function logger({ getState, dispatch }) {
  //dispatch的参数是action
  return dispatch => action => {
    console.log(action.type + '执行了');
    //返回一个dispatch，参数为action
    return dispatch(action)

  }
}

//dispatch本身是只接受对象{type:'ADD'}这种的，但是经过thunk之后可以接收回调和setTimeout以及ajax获取数据了
function thunk({ getState, dispatch }) {
  //dispatch的参数是action
  return dispatch => action => {
    console.log(action.type + '执行了');
    //action可以是对象，函数，不同的形式，操作也不同
    if (typeof action === 'function') {
      //如果action是函数，那就执行这个函数呗
      return action(dispatch, getState)
    } else {
      //如果action是对象，则直接返回dispatch(action)
      return dispatch(action)
    }


  }
}









