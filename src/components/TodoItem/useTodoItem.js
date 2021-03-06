import React, { useEffect, useRef, useState } from 'react'

const useTodoItem = (todos, setTodos, todo) => {
    const [editTodo, setEditTodo] = useState(false)
    const [newText, setNewText] = useState(todo)

    const onEditTodo = () => {
        setEditTodo(true)
    }

    const onChangeEditInput = event => {
        setNewText(event.target.value)
    }

    const onClickSubmitButton = id => {
        const nextTodoList = todos.map(todos =>
            todos.id === id ? { ...todos, todo: newText } : todos
        )
        setTodos(nextTodoList)
        window.localStorage.setItem('todoArray', JSON.stringify(nextTodoList))
        setEditTodo(false)
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

    const editInputRef = useRef(null)

    useEffect(() => {
        if (editTodo) {
            editInputRef.current.focus()
        }
    }, [editTodo])

    return {
        onIsDoneItem,
        onDeleteTodoItem,
        onEditTodo,
        editTodo,
        onChangeEditInput,
        onClickSubmitButton,
        newText,
        editInputRef
    }
}
export default useTodoItem
