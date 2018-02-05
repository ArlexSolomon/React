import React from 'react';

export default class TopBar extends React.Component {
    render() {
        return(
            <div className="topBar">
                <div className="topBarText">
                    <a>{this.props.topBarText}</a>
                </div>
            </div>
        );
    }
}