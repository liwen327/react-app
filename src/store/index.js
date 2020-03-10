import { createStore, combineReducers } from 'redux'

const initUserInfo = {
  isLogin: false,
  user: {
    name: null
  }
}

//定义state初始化和修改规则，reducer是一个纯函数
function loginReducer(state = { ...initUserInfo }, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        isLogin: true,
        user: {
          name: 'Mike'
        }
      };
    case "LOGOUT_SUCCESS":
      return {
        isLogin: false,
        user: {
          name: null
        }
      };
    default:
      return state;
  }
}

const store = createStore(combineReducers({ user: loginReducer }))

export default store;











