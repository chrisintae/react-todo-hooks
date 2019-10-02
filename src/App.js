import React, { useState } from 'react' // import useState Hook
import './App.css'

// create component
function Todo({ todo, index }) {
    return (
        <div className='todo'>
            { todo.text }
        </div>
    )
}


// useState gives two variables
// 1. value of state: this.state w/in class
// 2. update state: this.setState w/in class

function App () {
    // todos = state
    // setTodos = method to update state
    const [ todos, setTodos ] = useState([ //array of objects
        {
            text: 'Learn about React',
            isCompleted: false
        },
        {
            text: 'Meet friend for lunch',
            isCompleted: false
        },
        {
            text: 'Build really cool todo app',
            isCompleted: false
        }
    ]);

    return (
        <div className='app'>
            <div className='todo-list'>
                { todos.map((todo, index) => (
                    <Todo key={ index } index={ index} todo={ todo } />
                ))}
            </div>  
        </div>
    )
}

export default App;