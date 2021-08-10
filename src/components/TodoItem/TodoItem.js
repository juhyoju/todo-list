import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'

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
        <li
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
        </li>
    )
}
export default TodoItem
