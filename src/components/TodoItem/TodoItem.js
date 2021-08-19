import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'
import { TodoList, TodoText } from './TodoItemStyle'

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
        <TodoList isDone={isDone} ref={ref} isDragging={isDragging}>
            <input
                type='checkbox'
                checked={isDone}
                onChange={() => onIsDoneItem(id)}
            />
            <TodoText isDone={isDone}>{todo}</TodoText>

            <span>
                <button>
                    <FontAwesomeIcon icon={faEdit} />
                </button>

                <button onClick={() => onDeleteTodoItem(id)}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </span>
        </TodoList>
    )
}
export default TodoItem
