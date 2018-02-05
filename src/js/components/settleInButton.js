import React from 'react';

export default class SettleInButton extends React.Component {
    constructor(){
        super(),
        this.state={
            isOn: false
        }
    }
    componentWillMount() {
        this.setState({isOn: false});
    }
    handleClick() {
        this.setState({isOn: this.state.isOn? false:true});
    }
    render() {
        return(
            <div>
                <div className={this.state.isOn?'settleInType':'settleInTypeOn'} onClick={this.handleClick.bind(this)}>
                    <div className="types">{this.props.type}</div>
                </div>
            </div>
        );
    }
}