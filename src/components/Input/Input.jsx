import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({submit, value, onChange}) =>(
    <div className="form__cont">
        <form action="" onSubmit={submit}>
            <input type="text" placeholder="What needs to be done?" value={value} onChange={onChange} />
            <button type="submit" className="save__btn">Save</button>
        </form>
    </div>
);

Input.propTypes = {
    submit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Input;