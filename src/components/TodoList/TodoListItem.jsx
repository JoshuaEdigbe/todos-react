import React, { Component } from 'react';
import CheckBox from '../CheckBox/CheckBox';


class TodoListItem extends Component {
    
    constructor(props){
        super();
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(e){
        this.props.deleteItem(e)
    }

    render(){
        
        const { todoInput, elementIndex } = this.props;

        return (
            <li>
                <div>
                    <CheckBox 
                        todoInputText={todoInput} 
                    />
                </div>
                <div>
                    <button className="delete-todo-task-btn" elementindex={elementIndex}  onClick={this.deleteItem}>X</button>
                </div>
            </li>
        );
    }

}

export default TodoListItem;