import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem/TodoItem'

const TodoList = ({ todos, setTodos, title, checkedList }) => (
    <div className='todoList'>
        <TodoTitle>{title}</TodoTitle>

        <ul>
            {todos.map(todo => {
                if (checkedList !== todo.isDone) return null
                return (
                    <TodoItem
                        todos={todos}
                        todo={todo}
                        key={todos.id}
                        setTodos={setTodos}
                    />
                )
            })}
        </ul>
    </div>
)

export default TodoList

const TodoTitle = styled.p`
    margin: 50px 0 15px;
    font-weight: bold;
`
