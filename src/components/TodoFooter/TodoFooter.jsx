import React from 'react';
import PropTypes from 'prop-types';

import './TodoFooter.css';

const TodoFooter = ({ todos, displayAllActiveTodos, displayAllTodos, displayCompletedTodos, deleteAllCompletedTodos }) => (

    <div className="todo__footer">
        <div className="footer__inner">
            <div>
                <span>
                    <span className="number-items"> { todos.length } </span> Items
                </span>
            </div>
            <div>
                <span>
                    <button 
                        className="active"
                        onClick={()=> displayAllTodos()}
                    >
                        All
                    </button>
                </span>
                <span>
                    <button onClick={()=> displayAllActiveTodos()}>
                        Active
                    </button>
                </span>
                <span>
                    <button onClick={()=> displayCompletedTodos()}>
                        Completed
                    </button>
                </span>
            </div>
            <div>
                <span>
                    <button onClick={()=> deleteAllCompletedTodos()}>
                        Clear completed
                    </button>
                </span>
            </div>
        </div>
    </div>
);
    

TodoFooter.propTypes = {    
    displayAllActiveTodos: PropTypes.func.isRequired,
    displayAllTodos: PropTypes.func.isRequired,
    deleteAllCompletedTodos: PropTypes.func.isRequired,
    displayCompletedTodos: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        todoInput: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        alltodos: PropTypes.array.isRequired,
        checkBoxState: PropTypes.string.isRequired
      }))
}


export default TodoFooter;