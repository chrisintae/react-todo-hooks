import React, { useState } from 'react' // import useState Hook
import './App.css'
import { isCompletionStatement } from '@babel/types'

// create component
function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className='todo'>
            { todo.text }
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>Delete</button>
            </div>
        </div>
    )
}

// todo form
function TodoForm({ addTodo }) { // brackets for destucturing from props
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if(!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type='text' 
                className='input' 
                value={ value } 
                placeholder='Add Todo...'
                onChange={e => setValue(e.target.value)} />
        </form>
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

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    }

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className='app'>
            <div className='todo-list'>
                { todos.map((todo, index) => (
                    <Todo 
                        key={ index } 
                        index={ index} 
                        todo={ todo } 
                        completeTodo={ completeTodo }
                        removeTodo= { removeTodo }
                    />
                ))}
                <TodoForm addTodo={ addTodo } />
            </div>  
        </div>
    )
}

export default App;