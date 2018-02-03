import React from 'react';
import { render } from 'react-dom';
import '../../css/page/register.css'

class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        phoneNumber: "",
        verificationCode: "",
        step: 0
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
      this.setState({step: this.state.step+1});
      const user = {
        userName: this.state.phoneNumber,
        password: this.state.verificationCode
      }
      console.log(user);
    }
  
    render() {
      if(this.state.step==0){
          return (
            <div className="reg">
                <a className="submit" onClick={this.handleClick.bind(this)}>
                    下一步
                </a>
            </div>
          );
      }
      else{
      return (
        <div>
            <input
              name="phoneNumber"
              type="number"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange} />
            <br />
            <input
              name="verificationCode"
              type="number"
              value={this.state.password}
              onChange={this.handleInputChange} />
            <br />
            <button onClick={this.handleClick.bind(this)}>下一步</button>
        </div>
      );
    }
    }
  }
  
  render(
    <Reservation />,
    document.getElementById('subButton')
  );
  
