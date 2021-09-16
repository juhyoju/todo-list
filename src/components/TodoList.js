import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem/TodoItem'

const TodoList = ({ todos, setTodos, title, checkedList }) => {
    const onTodoNumber = todos.filter(
        todos => todos.isDone === checkedList
    ).length

    return (
        <div className='todoList'>
            <TodoTitle>{title}</TodoTitle>

            {onTodoNumber === 0 ? (
                <TodoNull>{title}이 없습니다.</TodoNull>
            ) : (
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
            )}
        </div>
    )
}

export default TodoList

const TodoTitle = styled.p`
    margin: 50px 0 15px;
    font-weight: bold;
`

const TodoNull = styled.div`
    color: #aaa;
    font-size: 14px;
    padding: 10px;
`
