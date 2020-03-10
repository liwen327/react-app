import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { connect } from '../components/kReactRedux'
// import { bindActionCreators } from 'redux';
import { bindActionCreators } from '../components/kReactRedux';

export default connect(
  // mapStateToProps是一个function function(state,ownProps)
  //起getState的作用，把获取到的state值合并入props
  (state) => {

    return { count: state }
  },
  /**
   * ! ownProps不要轻易使用，如果ownProps发生变化，整个mapStateToProps会重新执行
   * ! state也会被重新计算，影响性能
  */
  /* (state, ownProps) => {
    console.log('ownProps:==', ownProps);

    return { count: state }
  }, */
  //mapDispatchToProps 可以是Object和Function
  //1、是对象的情况：如果是对象，原版的dispatch就没有被注入到props中，add和minus会被注入到props中
  /* {
    add: () => ({ type: "ADD" }),
    minus: () => ({ type: "MINUS" })
  }, */
  //2、是function的情况：
  /**
   * ! ownProps不要轻易使用，如果ownProps发生变化，整个mapStateToProps会重新执行
   * ! 影响性能
  */
  (dispatch, ownProps) => {
    console.log('====================================');
    console.log('ownProps', ownProps);
    console.log('====================================');
    let res = {
      add: () => ({ type: 'ADD' }),
      minus: () => ({ type: 'MINUS' }),
    }
    res = bindActionCreators(res, dispatch)
    return { dispatch, ...res }
  },
  //mergeProps   会合并最后的返回，映射到props上
  (stateProps, dispatchProps, ownProps) => {
    return { omg: 'omg', ...stateProps, ...dispatchProps, ...ownProps }
  }

)(
  class reactReduxPage extends Component {

    render() {
      console.log('props:', this.props);

      const { count, add, minus } = this.props;
      return (
        <div>
          <h3>reactReduxPage</h3>
          <p>{count}</p>
          <button onClick={add}>mapDispatchToProps add</button>
          <button onClick={minus}>mapDispatchToProps minus</button>


        </div>
      )
    }
  })




