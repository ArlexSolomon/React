import React from 'react';
import TopBar from './topBar';
import SettleInButton from './settleInButton';

export default class SettledType extends React.Component {

    constructor() {
        super();
        this.state = {
            step: 0
        }
    }
    componentWillMount() {
        this.setState({type: "",isOn: false})
    }
    handleClick(types) {
        this.setState({type: types,isOn: this.state.isOn? false : true});
    }
    subClick() {
        this.setState({step: this.state.step=1});
    }
    render() {
        if(this.state.step==0) {
            return(
                <div>
                    <TopBar topBarText={"入驻"} />
                    <div className="settleItems">
                    {this.props.types.map((types) => {
                        return (
                        <div className="settleInType" onClick={this.handleClick.bind(this, types)} key={types}>
                            <div className="types">{types}</div>
                        </div>
                    );
                    })}
                    </div>
                    <div className="nextButton" onClick={this.subClick.bind(this)}>
                            <div className="types">下一步</div>
                    </div>
                </div>
            );
        }
        else if(this.state.step==1) {
            return(
                <div>
                    <TopBar topBarText={this.state.type+"-填写手机号"} />
                    <div className="settleItems">
                        <div className="input">
                            <input placeholder="请输入手机号"/>
                        </div>
                        <div className="input">
                            <input placeholder="请输入服务人"/>
                        </div>
                        <div className="input">
                            <input placeholder="请输入验证码"/>
                        </div>
                        <div className="getCode">
                            <div className="types">获取验证码</div>
                        </div>
                    </div>
                    <div className="nextButton1" onClick={this.subClick.bind(this)}>
                            <div className="types">下一步</div>
                    </div>
                </div>
            );
        }
        else if(this.state.step==2) {
            return(
                <div>
                <TopBar topBarText={"入驻"} />
                <div className="settleItems">
                {this.props.types.map((types) => {
                    return (
                    <div className="settleInType" onClick={this.handleClick.bind(this, types)} key={types}>
                        <div className="types">{types}</div>
                    </div>
                );
                })}
                </div>
                <div className="nextButton" onClick={this.subClick.bind(this)}>
                        <div className="types">下一步</div>
                </div>
            </div>
            );
        }
        else if(this.state.step==3) {
            return(
                <div>
                <TopBar topBarText={"入驻"} />
                <div className="settleItems">
                {this.props.types.map((types) => {
                    return (
                    <div className="settleInType" onClick={this.handleClick.bind(this, types)} key={types}>
                        <div className="types">{types}</div>
                    </div>
                );
                })}
                </div>
                <div className="nextButton" onClick={this.subClick.bind(this)}>
                        <div className="types">下一步</div>
                </div>
            </div>
            );
        }
    }
}