import React, { useState } from 'react'

const useTodoInput = (todos, setTodos) => {
    const [newTodo, setNewTodo] = useState('')

    const onChange = event => {
        setNewTodo(event.target.value)
    }

    const onKeyPress = event => {
        if (event.key === 'Enter') {
            onAddTodo()
        }
    }

    const onSaveTodo = newTodo => {
        window.localStorage.setItem('todoArray', JSON.stringify(newTodo))
    }

    const onAddTodo = () => {
        if (newTodo === '') {
            alert('⚠ 내용을 입력하세요.')
            return
        }
        const todoAll = [
            ...todos,
            { todo: newTodo, id: Date.now(), isDone: false }
        ]
        setTodos(todoAll)
        setNewTodo('')
        onSaveTodo(todoAll)
    }

    return { onChange, onKeyPress, onAddTodo, newTodo }
}

export default useTodoInput
