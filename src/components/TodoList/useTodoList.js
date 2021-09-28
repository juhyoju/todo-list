import React from 'react'

const useTodoList = (todos, checkedList, setTodos) => {
    const onTodoNumber = todos.filter(
        todos => todos.isDone === checkedList
    ).length

    const onDeleteAll = () => {
        const deleteMsg = window.confirm('해당 항목의 리스트를 모두 삭제합니다')

        if (deleteMsg) {
            const onDeleteTodos = todos.filter(
                todos => todos.isDone !== checkedList
            )
            setTodos(onDeleteTodos)
            window.localStorage.setItem(
                'todoArray',
                JSON.stringify(onDeleteTodos)
            )
        }
    }

    return { onTodoNumber, onDeleteAll }
}

export default useTodoList
