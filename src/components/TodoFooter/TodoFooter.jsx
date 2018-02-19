import React, { Component } from 'react';
import './TodoFooter.css';

class TodoFooter extends Component {

    render(){

        const todos = this.props.todos;

        return (
            <div className="todo__footer">
                <div className="footer__inner">
                    <div>
                        <span>
                            <span className="number-items">{ todos.length }</span> Items
                        </span>
                    </div>
                    <div>
                        <span>
                            <button className="active">
                                All
                            </button>
                        </span>
                        <span>
                            <button>
                                Active
                            </button>
                        </span>
                        <span>
                            <button>
                                Completed
                            </button>
                        </span>
                    </div>
                    <div>
                        <span>
                            <button>
                                Clear completed
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}


export default TodoFooter;