import React, { Component } from 'react'
import { Form, Input, Icon, Button } from 'antd'

const nameRules = {required:true,message:'please input your name'}
const passwordRules = {required:true,message:'please input your password'}

@Form.create({})
class FormPage2 extends Component {
  constructor(props, context) {
    super(props, context)

  }

  submit = () => {
    const {getFieldsValue,validateFields} = this.props.form;
    console.log('submit:', getFieldsValue());
    validateFields((err,values)=>{
      if(err){
        console.log('err:',err);
        
      }else{
        console.log('success:',values);
        
      }
    })

  }

  render() {
    console.log('====================================');
    console.log('props:', this.props);
    console.log('====================================');
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h3>FormPage</h3>
        <Form>
          <Form.Item>
          {getFieldDecorator('name',{rules:[nameRules]})(
            <Input placeholder="please input your name"  />

          )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator('password',{rules:[passwordRules]})(
            <Input type="password" placeholder="please input your password"  />

          )}
          </Form.Item>
          <Button type="primary" onClick={this.submit}>提交</Button>

        </Form>

      </div>
    )
  }
}

export default FormPage2
