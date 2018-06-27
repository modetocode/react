import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Paragraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iterator: 0
        };

        //da se napishe glupav kalkulator shto sobira dve brojki 
        //tri input polinja i kopche
        this.someClickEvent = this.someClickEvent.bind(this);
    }

    someClickEvent() {
        console.log(this.state.iterator);
        this.setState({iterator: ++this.state.iterator});
        
        // alert("test");
    }

    render() {
      return (
        <p className="App-intro" onClick={this.someClickEvent}>
            {this.props.someContent} 
            {this.props.someNumbers}
            {this.state.iterator}
        </p>
      );
    }
}

Paragraph.propTypes = {
    someContent: PropTypes.string,
    someNumbers: PropTypes.number
}

Paragraph.defaultProps = {
    someContent:'Stranger',
    someNumbers: 232425
} 

export default Paragraph;