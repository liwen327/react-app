
export function createStore(reducer, enhancer) {
  if (enhancer) {
    //这里createStore要变成加强版的，后面跟reducer要执行原来的修改规则
    return enhancer(createStore)(reducer)
  }
  //保存状态
  let currentState = undefined;
  //回调函数数组
  let currentListeners = [];

  function getState() {
    return currentState;
  }
  //订阅，可以多次订阅，每次订阅把回调放入回调数组
  function subscribe(listeners) {
    currentListeners.push(listeners);
  }
  function dispatch(action) {
    currentState = reducer(currentState, action);
    //监听函数是一个数组
    currentListeners.forEach(listener => listener());
    return action;
  }
  dispatch({ type: '@oooo-kaikeba' })  //这个dispatch调用是为了在页面初始化时页面上可以显示出初始值0，type值不要和项目中的重复

  return { getState, subscribe, dispatch }
}

//中间件applyMiddleware 是加强dispatch的
function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args);  //这里的args是createStore的参数（相当于reducer）

    //middlewares本身没有参数，它功能是要加强dispatch，现在它没有参数，这里就是要给它dispatch参数,即middleApi
    let dispatch = store.dispatch
    let middleApi = {
      getState: store.getStore,
      dispatch
    }
    const middleWareChain = middlewares.map(middleware => middleware(middleApi))
    //map()返回一个新数组，其结果是该数组中的每个元素都调用提供的函数后返回的结果，这里是执行middleware
    //想象一下，applyMiddleware()传入的参数：applyMiddleware(logger,thunk)

    //一起执行middleWareChain链，后一个中间件的参数是前一个中间件的返回值，还得给一个初始参数dispatch,即后面小括号中的dispatch
    dispatch = compose(...middleWareChain)(dispatch)
    return {
      ...store,
      //覆盖上面store里面的dispatch,这个dispatch就是加强版的dispatch
      dispatch
    }
  }
}

//compose一起执行一组函数，后一个函数的参数是前一个函数的返回值
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  else if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))   //不理解，这是为什么
}