import React from 'react';
import TodoListItem from '../TodoList/TodoListItem';
import PropTypes from "prop-types";
import './TodoList.css' 


const TodoList = ({deleteItem, toggleCheckBoxState, todos }) => {

  const todosArr = todos.map((todoItem) => (
      <TodoListItem 
        key={ todoItem.id } 
        elementIndex={ todoItem.id }
        deleteItem={ deleteItem }
        todoInputText={ todoItem.todoInput }
        toggleCheckBoxState={ toggleCheckBoxState }
        completed={ todoItem.completed }
      /> 
  ));

  return (
    <div className="todo_list__cont">
      <ul>
          {
            todosArr
          }
      </ul>
    </div>
  );
  
}

TodoList.proTypes = {
  toggleCheckBoxState: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    todoInput: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    alltodos: PropTypes.array.isRequired,
    checkBoxState: PropTypes.string.isRequired
  }))
}

export default TodoList;
