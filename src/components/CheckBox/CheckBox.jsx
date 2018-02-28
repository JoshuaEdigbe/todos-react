import React from 'react';
import PropTypes from 'prop-types'

import './CheckBox.css'


const CheckBox = ({ todoInputText, elementindex, completed, toggleCheckBoxState}) => (
    <label 
        className={ completed ? 'checkbx__cont active': 'checkbx__cont' } 
        data-id={ elementindex } 
        onClick={ () => {
            toggleCheckBoxState(elementindex)
        }}
    >
        <span className=""> { todoInputText } </span>
        <span className="checkmark"></span>
    </label>
);

CheckBox.propTypes = {
    todoInputText: PropTypes.string.isRequired,
    elementindex: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    toggleCheckBoxState: PropTypes.func.isRequired
}

export default CheckBox;