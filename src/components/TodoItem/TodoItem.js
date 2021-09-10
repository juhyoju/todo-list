import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'
import { TodoList, TodoText, TodoAction, TodoEditInput } from './TodoItemStyle'

import useTodoItem from './useTodoItem'

const TodoItem = ({ todo: { id, todo, isDone }, setTodos, todos }) => {
    const {
        onIsDoneItem,
        onDeleteTodoItem,
        onEditTodo,
        editTodo,
        onChangeEditInput,
        onClickSubmitButton,
        newText
    } = useTodoItem(todos, setTodos, todo)

    return (
        <TodoList isDone={isDone}>
            <input
                type='checkbox'
                checked={isDone}
                onChange={() => onIsDoneItem(id)}
            />
            {editTodo ? (
                <TodoEditInput
                    type='text'
                    value={newText}
                    onChange={onChangeEditInput}
                />
            ) : (
                <TodoText isDone={isDone}>{todo}</TodoText>
            )}

            <span>
                {editTodo ? (
                    <TodoAction>
                        <FontAwesomeIcon
                            icon={faCheck}
                            onClick={() => onClickSubmitButton(id)}
                        />
                    </TodoAction>
                ) : (
                    <TodoAction>
                        <FontAwesomeIcon icon={faEdit} onClick={onEditTodo} />
                    </TodoAction>
                )}
                <TodoAction onClick={() => onDeleteTodoItem(id)}>
                    <FontAwesomeIcon icon={faTimes} />
                </TodoAction>
            </span>
        </TodoList>
    )
}
export default TodoItem
