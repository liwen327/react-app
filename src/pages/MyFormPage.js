import React, { Component } from 'react'

import kFormCreate from '../components/KFormCreate'

const nameRules = { required: true, message: 'please input your name' }
const passwordRules = { required: true, message: 'please input your password' }

@kFormCreate
class MyFormPage extends Component {

  submit = () => {
    const { getFieldsValue, validateFields } = this.props;
    console.log('submit:', getFieldsValue());
    validateFields((err, values) => {
      if (err) {
        console.log('err:', err);

      } else {
        console.log('success:', values);
      }
    })
  }
  render() {
    console.log('props:', this.props);
    const { getFieldDecorator } = this.props;

    return (
      <div>
        <h3>MyFormPage</h3>
        {getFieldDecorator("name", { rules: [nameRules] })(<input type="text" placeholder="请输入用户名" />)}
        {getFieldDecorator("password", { rules: [passwordRules] })(<input type="password" placeholder="请输入密码" />)}
        <button onClick={this.submit}>提交</button>
      </div>
    )
  }
}

export default MyFormPage;


