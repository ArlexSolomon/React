import React from 'react';
import { render } from 'react-dom';
import '../../css/page/index.css'

class Reservation extends React.Component {
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
        <div>
          <img src="../../dist/img/logo.png"/>
        </div>
          <div className="input">
            <input
              name="userName"
              type="text"
              placeholder="Phone number"
              value={this.state.userName}
              onChange={this.handleInputChange} />
          </div>
          <div className="input">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange} />
          </div>
            <div className="loginButton" onClick={this.handleClick.bind(this)}>
              <div className="loginText">Login</div>
            </div>
            <a className="forgetPassword">Forget your login details? Get help signing in.</a>
        </div>
      );
    }
  }
  
class Register extends React.Component{
  render () {
    return(
      <div className="register">
        <div className="registerText">
         <a className="forgetPassword" href="view/register.html">Don't have an account? Sigin up</a>
        </div>
      </div>
    );
  }
}


render(
  <Register />,
  document.getElementById('register')
);
  render(
    <Reservation />,
    document.getElementById('root')
  );
  
