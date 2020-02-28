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
        [name]: value
      })
    }

    getFieldDecorator = (field, option) => {
      this.options[field] = option
      return InputCom => {
        //!克隆一份
        return (
          <div>
            {React.cloneElement(InputCom, {
              name: field,
              value: this.state[field] || "",
              onChange: this.handleChange  //实现双向绑定
            })}
            <p>{this.state.errors[field]}</p>
          </div>
        )
      }
    }

    validate = (state) => {
      //校验错误信息
      const errors = {}
      for (let name in this.options) {
        if (state[name] === 'undefined') {
          errors[name] = this.options[name].rules[0].message;
        }
      }
      this.setState({ ...state, errors })

    }



    render() {
      return (
        <div>

        </div>
      )
    }
  }

}
