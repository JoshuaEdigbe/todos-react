import React from 'react';
import TodoListItem from '../TodoList/TodoListItem';
import './TodoList.css' 


const TodoList = ({deleteItem, toggleCheckBoxState, todos }) => {

  const todosArr = todos.map((todoItem) => (
      <TodoListItem 
        key={ todoItem.id } 
        elementIndex={ todoItem.id }
        deleteItem={ deleteItem }
        todoInputText={ todoItem.todoInput }
        toogleItemCompletedState={ toggleCheckBoxState }
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

export default TodoList;
