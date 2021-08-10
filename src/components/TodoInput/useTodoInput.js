import { useState } from 'react'

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
            alert('⚠ 내용이 입력되지 않았습니다.')
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

    const onDeleteAll = () => {
        const deleteMsg = window.confirm('Todo 항목을 모두 삭제하십니까?')

        if (deleteMsg) {
            window.localStorage.clear('todoArray')
            setTodos([])
        }
    }

    return { onChange, onKeyPress, onAddTodo, onDeleteAll, newTodo }
}

export default useTodoInput
