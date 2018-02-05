import React from 'react';

export default class LoginInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userName: "",
        password: ""
      };
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    handleClick() {
      const user = {
        userName: this.state.userName,
        password: this.state.password
      }
      console.log(user);
    }
  
    render() {
      return (
        <div className="inputArea">
          <div className="input">
            <input
              name="userName"
              type="text"
              placeholder="手机号"
              value={this.state.userName}
              onChange={this.handleInputChange} />
          </div>
          <div className="input">
            <input
              name="password"
              type="password"
              placeholder="密码"
              value={this.state.password}
              onChange={this.handleInputChange} />
          </div>
            <div className="loginButton" onClick={this.handleClick.bind(this)}>
              <div className="loginText">登陆</div>
            </div>
            <a className="forgetPassword">忘记密码？</a>
            <a className="register" href="view/register.html">去注册</a>
        </div>
      );
    }
  }