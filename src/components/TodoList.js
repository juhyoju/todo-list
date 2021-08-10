import React from 'react'
import 'style/TodoList.css'
import TodoItem from './TodoItem/TodoItem'

const TodoList = ({ moveCard, todos, setTodos }) => {
    return (
        <div className='todoList'>
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        todos={todos}
                        todo={todo}
                        key={todos.id}
                        moveCard={moveCard}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
