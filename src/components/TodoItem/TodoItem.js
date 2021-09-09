import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'
import { TodoList, TodoText, TodoAction } from './TodoItemStyle'

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
                <input
                    type='text'
                    value={newText}
                    onChange={onChangeEditInput}
                />
            ) : (
                <TodoText isDone={isDone}>{todo}</TodoText>
            )}

            <span>
                {editTodo ? (
                    <TodoAction onClick={() => onClickSubmitButton(id)}>
                        ✅
                    </TodoAction>
                ) : (
                    <>
                        <TodoAction>
                            <FontAwesomeIcon
                                icon={faEdit}
                                onClick={onEditTodo}
                            />
                        </TodoAction>
                        <TodoAction onClick={() => onDeleteTodoItem(id)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </TodoAction>
                    </>
                )}
            </span>
        </TodoList>
    )
}
export default TodoItem
