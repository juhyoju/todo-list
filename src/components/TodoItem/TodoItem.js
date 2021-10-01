import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'
import { TodoList, TodoText, TodoAction, TodoEditInput } from './TodoItemStyle'

import useTodoItem from './useTodoItem'

const TodoItem = ({ todo: { id, todo, isDone }, setTodos, todos, mode }) => {
    const {
        onIsDoneItem,
        onDeleteTodoItem,
        onEditTodo,
        editTodo,
        onChangeEditInput,
        onClickSubmitButton,
        newText,
        editInputRef
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
                    mode={mode}
                    //autoFocus='autoFocus'
                    ref={editInputRef}
                />
            ) : (
                <TodoText isDone={isDone}>{todo}</TodoText>
            )}

            <span>
                {!isDone ? (
                    editTodo ? (
                        <TodoAction onClick={() => onClickSubmitButton(id)}>
                            <FontAwesomeIcon
                                icon={faCheck}
                                style={{ color: '#e64a58' }}
                            />
                        </TodoAction>
                    ) : (
                        <TodoAction onClick={onEditTodo}>
                            <FontAwesomeIcon icon={faEdit} />
                        </TodoAction>
                    )
                ) : null}
                <TodoAction onClick={() => onDeleteTodoItem(id)}>
                    <FontAwesomeIcon icon={faTimes} />
                </TodoAction>
            </span>
        </TodoList>
    )
}
export default TodoItem
