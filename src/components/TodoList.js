import React from 'react'
import TodoItem from './TodoItem/TodoItem'

const TodoList = ({ todos, setTodos }) => {
    return (
        <div className='todoList'>
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        todos={todos}
                        todo={todo}
                        key={todos.id}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
