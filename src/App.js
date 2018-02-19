import React, { Component } from 'react';
import TodoList from './components/TodoList/TodoList';
import Input from './components/Input/Input';
import TodoFooter from './components/TodoFooter/TodoFooter';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.saveTodoItem = this.saveTodoItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = {
      id: 0,
      todoInput: '',
      completed: false,
      todos: []
    }
  }

  saveTodoItem(e){
    e.preventDefault();

    const todos = JSON.parse(JSON.stringify(this.state.todos));

    this.setState((prevState, props) =>{
      return {
        todos: todos.push({
          todoInput: this.state.todoInput,
          compeleted: false,
          id: Math.floor(Math.random() * 100)
        })
      }
    })


    this.setState({
        todos: todos,
        todoInput: ''
    });
  }

  deleteItem(e){
    e.preventDefault();
    const todos = JSON.parse(JSON.stringify(this.state.todos));
    
    todos.forEach((item, index) =>{
      (function(val, ind){
        if (val.id === +e.target.getAttribute('elementindex')){
          todos.splice(ind, 1)
        }
      })(item, index)
    })
    
    this.setState({
      todos: todos
    })    
    
  }
  render() {
    return (
      <div className="App">
        <h2 className="title">todos</h2>
        <Input 
          saveTodoItem={this.saveTodoItem} 
          value={this.state.todoInput} 
          onChange={(e) => {
            this.setState({
              todoInput: e.target.value
            })
          }} 
        />
        <TodoList todos={this.state.todos} deleteItem={this.deleteItem}/>
        <TodoFooter todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
