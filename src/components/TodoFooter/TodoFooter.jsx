import React from 'react';
import './TodoFooter.css';

const TodoFooter = ({ todos, displayAllActiveTodos, displayAllTodos, displayCompletedTodos, deleteAllCompletedTodos }) => {

    return (
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
    
}


export default TodoFooter;