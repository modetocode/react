import React, { Component } from 'react';

export default function() {
    return (
        <div>
                <input type="number" name="first" value={this.props.valueA} onChange={this.props.valueHandler} />
                <input type="number" name="second" value={this.props.valueB} onChange={this.props.valueHandler} />
            </div>
    );
}