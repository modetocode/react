import React, { Component } from 'react';
import CForm from './CForm';
import CValue from './CValue';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            first: 4,
            second: 6,
            sum: 0,
        }

        this.changeNumberHandler = this.changeNumberHandler.bind(this);
        this.sumTwo = this.sumTwo.bind(this);
    }

    sumTwo() {
        this.setState({ sum: parseInt(this.state.first) + parseInt(this.state.second) });
    }

    setFirst(event) {
        this.setState({ first: event.target.value });
    }

    setSecond(event) {
        this.setState({ second: event.target.value });
    }

    changeNumberHandler(event) {
        let v = {};
        v[event.target.name] = event.target.value;
        let name = event.target.name;
        this.setState(v);
    }

    render() {
        return (
            <div>
                <CForm valueA={this.state.first} valueB={this.state.second} valueHandler={this.changeNumberHandler} />
                <CValue result={this.state.sum} clickHandler={this.sumTwo} />
            </div>
        )
    };

}

export default Calculator;