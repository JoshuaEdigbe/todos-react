import React from 'react';
import CheckBox from '../CheckBox/CheckBox';


const TodoListItem = ({ todoInputText, elementIndex, toogleItemCompletedState, completed, deleteItem }) => {

    return (
        <li>
            <div>
                <CheckBox 
                    todoInputText={ todoInputText } 
                    toggleCheckBoxState={ toogleItemCompletedState }
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
    );
    

}

export default TodoListItem;