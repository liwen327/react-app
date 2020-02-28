import React, { Component } from 'react'

export default function KFormCreate(Cmp) {

  return class extends Component {
    constructor(props) {
      super(props)
      this.state = { errors: {} }
      this.options = {}

    }
    handleChange = (e) => {
      //setState name 和value
      let { name, value } = e.target
      this.validate({
        ...this.state,
        [name]: value //输入框中输入内容时执行校验,传入新值
      })
    }

    getFieldDecorator = (field, option) => {
      /* 为了在validateFields去遍历传入的name和password，在这里是页面一加载的时候就执行的，在这时把name和password存起来，
      方便在validateFields去遍历校验 */
      this.options[field] = option
      // InputCom就是在MyFormPage中传入的<input type="text" placeholder=""/>
      return InputCom => {
        //!克隆一份
        return (
          <div>
            {/* 1、这里为什么要用cloneElement??
            原来在MyFormPage中传入的<input type="text" placeholder=""/> 只有两个type和placeholder两个属性，
            我们现在想在这个input上加上更多的属性，如value，name和onChange，要实现双向绑定,所以我们要克隆一份，在克隆的上面加
            上这些属性。
            2、不能在原来的组件上添加属性？
            回答是不能的，高阶组件是接收一个组件，返回一个新的组件，不能污染原来的组件
            */}
            {React.cloneElement(InputCom, {
              name: field,
              value: this.state[field] || "",
              onChange: this.handleChange  //使用onChange事件实现双向绑定
            })}
            {/* 在输入框下面展示错误信息 */}
            <p>{this.state.errors[field]}</p>
          </div>
        )
      }
    }
    getFieldsValue = () => {
      return { ...this.state }
    }
    getFieldValue = field => {
      return this.state[field]
    }

    validate = (state) => {
      //校验错误信息
      const errors = {}
      for (let name in this.options) {
        //只简单做了判断：没有输入内容就不合法
        if (state[name] === undefined) {
          errors[name] = this.options[name].rules[0].message;
        }
      }
      this.setState({ ...state, errors })

    }

    validateFields = callback => {
      //校验错误信息
      const state = { ...this.state }
      /* const errors = {}
      for (let name in this.options) {
        if (state[name] === undefined) {
          errors[name] = this.options[name].rules[0].message
        }
      } */
      this.validate(state)
      const { errors } = state
      console.log('====================================');
      console.log('errors:', errors);
      console.log('====================================');
      if (JSON.stringify(errors) === "{}") {
        //输入的值合法
        callback(undefined, state)
      } else {
        //不合法
        callback(errors, state)
      }

    }



    render() {
      return (
        <div>
          <Cmp
            getFieldDecorator={this.getFieldDecorator}
            getFieldsValue={this.getFieldsValue}
            getFieldValue={this.getFieldValue}
            validateFields={this.validateFields}
          />

        </div>
      )
    }
  }

}
