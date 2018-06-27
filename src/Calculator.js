import React, { Component } from 'react';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            first: 4,
            second: 6,
            sum: 0,
        }

        this.changeNumberHandler = this.changeNumberHandler.bind(this);
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
                <input type="number" name="first" value={this.state.first} onChange={this.changeNumberHandler} />
                <input type="number" name="second" value={this.state.second} onChange={this.changeNumberHandler} />
                <input type="button" value="+" onClick={this.sumTwo.bind(this)} />
                <input type="number" value={this.state.sum} />
                Calculator </div>
        )
    };

}

export default Calculator;