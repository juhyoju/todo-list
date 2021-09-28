import React from 'react'

import TodoItem from '../TodoItem/TodoItem'
import { TodoTitle, TodoNull } from './TodoListStyle'
import useTodoList from './useTodoList'

const TodoList = ({ todos, setTodos, title, checkedList, mode }) => {
    const { onTodoNumber } = useTodoList(todos, checkedList)
    return (
        <div className='todoList'>
            <TodoTitle>{title}</TodoTitle>

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
