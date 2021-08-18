import React, { useState, useCallback, useRef } from 'react'
import TodoInput from './TodoInput/TodoInput'
import TodoList from './TodoList'
import ThemeToggle from 'theme/ThemeToggle'
import { useTheme } from 'theme/themeProvider'
import styled from 'styled-components'

import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './dnd'
import update from 'immutability-helper'

const TodoTemplate = id => {
    // 가져오기
    const onGetTodo = window.localStorage.getItem('todoArray')
    const [todos, setTodos] = useState(JSON.parse(onGetTodo) ?? [])

    const Today = new Date()
    const DateString = Today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    })

    const moveCard = useCallback(
        // (**) Reorder an array
        (dragIndex, hoverIndex) => {
            const dragCard = todos[dragIndex]

            setTodos(
                update(todos, {
                    $splice: [
                        [dragIndex, 1], // Delete
                        [hoverIndex, 0, dragCard] // Add
                    ]
                })
            )
        },
        [todos]
    )

    const ref = useRef(null) // (*)

    const [, drop] = useDrop({
        // (*)
        accept: ItemTypes.CARD,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }

            const dragIndex = id
            const hoverIndex = id

            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex
        }
    })

    const [{ isDragging }, drag] = useDrag({
        type: 'CARD',
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    drag(drop(ref)) // (*)

    const [ThemeMode, toggleTheme] = useTheme()

    return (
        <TodoWrap>
            <header>
                <h1 className='title'>
                    TASKS <strong>LIST</strong>
                </h1>
                <p style={{ textAlign: 'center' }}>{DateString}</p>
            </header>
            <article className='todo_template'>
                <TodoInput todos={todos} setTodos={setTodos} />

                <TodoList
                    todos={todos}
                    moveCard={moveCard}
                    setTodos={setTodos}
                />

                <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
                    DarkMode
                </ThemeToggle>
            </article>
            <footer>&copy; {new Date().getFullYear()} TodoList</footer>
        </TodoWrap>
    )
}

export default TodoTemplate

const TodoWrap = styled.div`
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    height: 100vh;
`
