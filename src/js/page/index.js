import React from 'react';
import { render } from 'react-dom';

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
  
    render() {
      return (
        <div>
            <input
              name="userName"
              type="text"
              value={this.state.userName}
              onChange={this.handleInputChange} />
            <br />
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange} />
        </div>
      );
    }
  }
  
  render(
    <Reservation />,
    document.getElementById('root')
  );
  
