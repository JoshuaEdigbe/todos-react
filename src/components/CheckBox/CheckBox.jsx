import React, { Component } from 'react';
import './CheckBox.css'

class CheckBox extends Component {

    toogleItemCompletedState = event => {        
        this.props.toggleCheckBoxState(this.props.elementindex)
    }

    render(){

        const { todoInputText, elementIndex, completed } = this.props;
        
        return (
            <label 
                className={ completed ? 'checkbx__cont active': 'checkbx__cont' } 
                data-id={ elementIndex } 
                onClick={ this.toogleItemCompletedState }
            >
                <span className=""> { todoInputText } </span>
                <span className="checkmark"></span>
            </label>
        );
    }
}

export default CheckBox;