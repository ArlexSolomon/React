import React from 'react';
import { render } from 'react-dom';
import '../../css/page/index.css';
import '../../css/common/topBar.css';
import '../../css/common/loginInput.css';
import LoginLogo from '../components/loginLogo';
import LoginInput from '../components/loginInput';
import TopBar from '../components/topBar';

class Login extends React.Component{
  render() {
    return(
      <div>
        <TopBar topBarText={"用户登陆"} />
        <LoginLogo />
        <LoginInput />
      </div>
    );
  }
}

render(<Login />, document.getElementById('root'));
// render(<TopBar name={"用户登陆"}/>, document.getElementById('topBar'));
// render(<LoginLogo />, document.getElementById('loginLogo'));
// render(<LoginInput />, document.getElementById('root'));
  
