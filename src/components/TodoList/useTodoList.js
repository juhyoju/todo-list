import React from 'react'

const useTodoList = (todos, checkedList) => {
    const onTodoNumber = todos.filter(
        todos => todos.isDone === checkedList
    ).length

    return { onTodoNumber }
}

export default useTodoList
