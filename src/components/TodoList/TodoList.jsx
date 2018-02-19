import React, {Component} from 'react';
import TodoListItem from '../TodoList/TodoListItem';
import './TodoList.css' 

class TodoList extends Component {
   
  
    render(){

      const todos = this.props.todos.map((todoItem) => (
          <TodoListItem key={todoItem.id} elementIndex={todoItem.id} {...todoItem} deleteItem={this.props.deleteItem} /> 
      ));
      
      return(
        <div className="todo_list__cont">
          <ul>
              {
                todos
              }
          </ul>
        </div>
      )
    }
  }

  export default TodoList;