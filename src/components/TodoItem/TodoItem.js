import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import useTodoItem from './useTodoItem'

const TodoItem = ({
    ref,
    isDragging,
    todo: { id, todo, isDone },
    setTodos,
    todos
}) => {
    const { onIsDoneItem, onDeleteTodoItem } = useTodoItem(todos, setTodos)

    return (
        <TodoList
            className={isDone ? 'done' : 'ing'}
            ref={ref}
            isDragging={isDragging}
        >
            <input
                type='checkbox'
                checked={isDone}
                onChange={() => onIsDoneItem(id)}
            />
            <span className='todoText'>{todo}</span>

            <span className='btn_right'>
                <button className='add_btn'>
                    <FontAwesomeIcon icon={faEdit} />
                </button>

                <button
                    onClick={() => onDeleteTodoItem(id)}
                    className='add_btn'
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </span>
        </TodoList>
    )
}
export default TodoItem

const TodoList = styled.li`
    border: 1px solid #ddd;
    padding: 25px;
    box-shadow: 3px 3px 0 #eee;
    margin-bottom: 15px;
`
