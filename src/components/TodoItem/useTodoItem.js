import React, { useState } from 'react'

const useTodoItem = (todos, setTodos) => {
    const [editTodo, setEditTodo] = useState(false)

    const onEditTodo = () => {
        setEditTodo(true)
    }

    const onIsDoneItem = id => {
        const onIsDoneTodo = todos.map(todos =>
            todos.id === id ? { ...todos, isDone: !todos.isDone } : todos
        )
        setTodos(onIsDoneTodo)
        window.localStorage.setItem('todoArray', JSON.stringify(onIsDoneTodo))
    }

    const onDeleteTodoItem = id => {
        const deleteMsg = window.confirm('이 항목을 삭제하십니까?')

        if (deleteMsg) {
            const onDeleteTodos = todos.filter(todos => todos.id !== id)
            setTodos(onDeleteTodos)
            window.localStorage.setItem(
                'todoArray',
                JSON.stringify(onDeleteTodos)
            )
        }
    }

    return { onIsDoneItem, onDeleteTodoItem, onEditTodo, editTodo }
}
export default useTodoItem
