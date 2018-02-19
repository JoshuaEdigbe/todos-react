import React, { Component } from 'react';

class CheckBox extends Component {

    constructor(props){
        super(props)

        this.toogleItemCompletedState = this.toogleItemCompletedState.bind(this)
        this.state = {
            checkboxState: 'container'
        }
    }

    toogleItemCompletedState(e){
       
        const checkboxState = e.target.className === 'container' ? 'container active' : 'container';
        
        this.setState({
            checkboxState: checkboxState
        })
    }

    render(){   

        const { todoInputText, elementIndex } = this.props;
        
        return (
            <label className={this.state.checkboxState} data-id={elementIndex} onClick={this.toogleItemCompletedState}>
                <span className="">{todoInputText}</span>
                <span className="checkmark"></span>
            </label>
        );
    }
}

export default CheckBox