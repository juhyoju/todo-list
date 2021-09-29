import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import TodoItem from '../TodoItem/TodoItem'
import { TodoTitle, TodoNull, TodoAllDeleteButton } from './TodoListStyle'
import useTodoList from './useTodoList'

const TodoList = ({ todos, setTodos, title, checkedList, mode }) => {
    const { onTodoNumber, onDeleteAll } = useTodoList(
        todos,
        checkedList,
        setTodos
    )
    return (
        <div className='todoList'>
            <TodoTitle isDone={checkedList}>
                {title}
                {onTodoNumber === 0 ? null : (
                    <TodoAllDeleteButton
                        onClick={onDeleteAll}
                        title='삭제'
                        isDone={checkedList}
                    >
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </TodoAllDeleteButton>
                )}
            </TodoTitle>

            {onTodoNumber === 0 ? (
                checkedList === true ? (
                    <TodoNull mode={mode}>{title}이 아직 없어요 😣</TodoNull>
                ) : (
                    <TodoNull mode={mode}>{title}을 모두 끝냈어요 😋</TodoNull>
                )
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
