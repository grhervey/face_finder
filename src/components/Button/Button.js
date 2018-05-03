import React, { Component } from 'react';

import './Button.css';


class Button extends Component {
    render() {
        const {label, onClick} = this.props;
        return(
               <p className='button1' onClick={onClick}>{label}</p>
            );
    }
}


export default Button;
