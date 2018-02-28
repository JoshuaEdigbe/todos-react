import React from 'react';
import PropTypes from 'prop-types'

import CheckBox from '../CheckBox/CheckBox';


const TodoListItem = ({ todoInputText, elementIndex, toggleCheckBoxState, completed, deleteItem }) => (
  
    <li>
        <div>
            <CheckBox 
                todoInputText={ todoInputText } 
                toggleCheckBoxState={ toggleCheckBoxState }
                completed={ completed }
                elementindex={ elementIndex }
            />
        </div>
        <div>
            <button 
                className="delete_todo_task__btn" 
                elementindex={ elementIndex }  
                onClick={ (e) => { deleteItem(e) } }>
                    X
            </button>
        </div>
    </li>   
)

TodoListItem.proTypes = {
    todoInputText: PropTypes.string.isRequired,
    elementIndex: PropTypes.number.isRequired,
    toggleCheckBoxState: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default TodoListItem;