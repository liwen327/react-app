import React, { Component } from 'react'
import { Form, Input, Icon, Button } from 'antd'

export default class FormPage extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      name: '',
      password: ''
    }
  }

  submit = () => {
    console.log('submit:', this.state);

  }


  render() {
    const { name, password } = this.props
    return (
      <div>
        <h3>FormPage</h3>
        <Form>
          <Form.Item>
            <Input value={name} onChange={(event) => this.setState({ name: event.target.value })} />
          </Form.Item>
          <Form.Item>
            <Input type="password" value={password} onChange={(event) => this.setState({ password: event.target.value })} />
          </Form.Item>
          <Button type="primary" onClick={this.submit}>提交</Button>

        </Form>

      </div>
    )
  }
}
