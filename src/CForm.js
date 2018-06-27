import React, { Component } from 'react';
import CFormTemplate  from './CFormTemplate';

class CForm extends Component {
    render() {
        return (
            CFormTemplate.call(this)
            
        );
    };
}

export default CForm;