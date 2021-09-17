import React from 'react'

import TodoItem from '../TodoItem/TodoItem'
import { TodoTitle, TodoNull } from './TodoListStyle'
import useTodoList from './useTodoList'

const TodoList = ({ todos, setTodos, title, checkedList }) => {
    const { onTodoNumber } = useTodoList(todos, checkedList)
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
