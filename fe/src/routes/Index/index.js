import React from 'react';
import { connect } from 'dva';
import {routerRedux} from "dva/router";
import styles from './styles.css';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // this.props.dispatch(routerRedux.push("/users"));
        fetch("/api/login",{
          method:"POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(values)
        }).then(data=>{
          message.success("登陆成功！");
            window.sessionStorage.setItem("login","true");
            window.sessionStorage.setItem("id",values.id);
            this.props.dispatch(routerRedux.push("/user"));
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={ styles.loginForm}>
        <FormItem>
          {getFieldDecorator('id', {
            rules: [{ required: true, message: '请输入你的学号!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="学号" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入你的密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住我</Checkbox>
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className={styles.loginButton}>
            登陆
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const Login = Form.create()(NormalLoginForm);


// function Login() {
//   return (
//     <div className={styles.normal}>
//       Route Component: Login
//     </div>
//   );
// }

// function mapStateToProps() {
//   return {};
// }

export default connect()(Login);
