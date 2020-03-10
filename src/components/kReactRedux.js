import React, { Component } from 'react'
// import { bindActionCreators } from 'redux';

const valueContext = React.createContext()


export const connect = (
  mapStateToProps = state => state,
  mapDispatchToProps) => WrappedComponent => {
    return class extends Component {
      //此时所有的生命周期都可以访问this.context
      static contextType = valueContext;
      constructor(props) {
        super(props);
        this.state = {
          props: {}
        }
      }
      componentDidMount() {
        const { subscribe } = this.context;
        this.update();
        //订阅
        subscribe(() => {
          this.update();
        })
      }
      //update
      update() {
        const { getState, dispatch } = this.context;
        //getState 获取当前store的state  getState()就是一个值0，mapStateToProps是一个函数，获取一个值，返回一个对象。
        console.log('getState():', mapStateToProps(getState()));  //getState(): {count: 0}

        let stateProps = mapStateToProps(getState());
        let dispatchProps;
        //mapDispatchToProps可以是Object和function
        if (typeof mapDispatchToProps === 'object') {
          dispatchProps = bindActionCreators(dispatchProps, dispatch);
        } else if (typeof mapDispatchToProps === 'function') {
          dispatchProps = mapDispatchToProps(dispatch, this.props);
        } else {
          //默认：不传add或minus的时候
          dispatchProps = { dispatch };
        }
        this.setState({
          props: {
            ...stateProps,
            ...dispatchProps
          }

        })
      }

      render() {
        console.log('context:', this.context);

        return <WrappedComponent {...this.state.props} />;
      }
    }

  }

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <valueContext.Provider value={this.props.store}>
        {this.props.children}
      </valueContext.Provider>
    );
  }
}

function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}
// {
//  add:()=>({type:'ADD'})
// ! 下面的bindActionCreators就是在mapDispatchToProps是object时使用的,因为不需要加dispatch，所以就需要遍历对象中的属性，
// ! 并且给属性方法的返回值都加上dispatch(上面的bindActionCreator方法)
// }

export function bindActionCreators(creators, dispatch) {
  let obj = {}
  for (const key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }
  return obj;
}