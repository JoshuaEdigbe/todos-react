import React, { Component } from 'react';
import TodoList from './components/TodoList/TodoList';
import Input from './components/Input/Input';
import TodoFooter from './components/TodoFooter/TodoFooter';
import './App.css';

class App extends Component {

  state = {
    id: 0,
    todoInput: '',
    completed: false,
    todos: [],
    allTodos: [],
    checkBoxState: 'container'
  }


  toogleItemCompletedState = id => {

    const todos = this.cloneArray(this.state.allTodos);

    todos.forEach((item, index) => {
      if(item.id === id){
        item.completed = !item.completed;
      }
    });

    this.setState({
      todos: todos,
      allTodos: todos
    })
  }

  cloneArray = arr => {
    return JSON.parse(JSON.stringify(arr));
  }

  saveTodoItem = event => {

    event.preventDefault();

    const todos = this.cloneArray(this.state.allTodos);

    this.setState((prevState, props) =>{
      
      if(this.state.todoInput){
          todos.push({
            todoInput: this.state.todoInput,
            completed: false,
            id: prevState.id += 1 
          });
      }

      return {
        todos: todos,
        allTodos: todos, 
        todoInput: ''
      }
    });
  }

  deleteItem = event => {

    const todos = this.cloneArray(this.state.todos);

    todos.forEach((item, index) =>{
      (function(val, ind){
        if (val.id === +event.target.getAttribute('elementindex')){
          todos.splice(ind, 1)
        }
      })(item, index)
    })
    
    this.setState({
      todos: todos,
      allTodos: todos
    })    
    
  }


  displayAllActiveTodos = () => {

    let todos = this.cloneArray(this.state.allTodos);

    todos = todos.filter(item => item.completed === false);

    this.setState({
      todos: todos
    })
  }


  displayAllTodos = () => {
    this.setState({
      todos: this.state.allTodos
    })
  } 

  displayCompletedTodos = () => {
    
    let todos = this.cloneArray(this.state.allTodos);

    if (todos.length === 0) return;


    todos = todos.filter(item => item.completed === true);

    this.setState({
      todos: todos
    });
  }

  deleteAllCompletedTodos = () => {
    let todos = this.cloneArray(this.state.allTodos);

    todos = todos.filter(item => item.completed === false);

    this.setState({
      todos: todos,
      allTodos: todos
    })
  }

  render() {
    return (
      <div className="App">
        <h2 className="title">todos</h2>
        <Input 
            submit={ this.saveTodoItem } 
            value={ this.state.todoInput } 
            onChange={(e) => {
              this.setState({
                todoInput: e.target.value
              })
            }} 
        />
        <TodoList 
            todos={ this.state.todos } 
            deleteItem={ this.deleteItem } 
            toggleCheckBoxState={ this.toogleItemCompletedState } 
            checkBoxClassName={ this.state.checkBoxState }
        />
        <TodoFooter 
            todos={ this.state.todos } 
            displayAllActiveTodos={ this.displayAllActiveTodos }
            displayAllTodos={ this.displayAllTodos }
            displayCompletedTodos={ this.displayCompletedTodos }
            deleteAllCompletedTodos={ this.deleteAllCompletedTodos }
        />
      </div>
    );
  }
}

export default App;
