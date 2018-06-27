import React, { Component } from 'react';

class CValue extends Component {
    render() {
        return (
            <div>
                <input type="button" value="+" onClick={this.props.clickHandler} />
                <input type="number" value={this.props.result} />
            </div>
        )
    };
}

export default CValue;