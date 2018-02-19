import React from 'react';
import './Input.css';

const Input = ({submit, value, onChange}) =>(
    <div className="form__cont">
        <form action="" onSubmit={submit}>
            <input type="text" placeholder="What needs to be done?" value={value} onChange={onChange} />
            <button type="submit" className="save__btn">Save</button>
        </form>
    </div>
);

export default Input;