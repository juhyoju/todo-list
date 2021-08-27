import React, { useState, useCallback, useRef } from 'react'
import TodoInput from './TodoInput/TodoInput'
import TodoList from './TodoList'
import DateString from './DateString'
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
            <div style={{ width: '85%', maxWidth: '1000px' }}>
                <header>
                    <DateString />
                </header>

                <article style={{ marginBottom: '50px' }}>
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
                <TodoFooter>
                    &copy; {new Date().getFullYear()} TodoList
                </TodoFooter>
            </div>
        </TodoWrap>
    )
}

export default TodoTemplate
const TodoWrap = styled.div`
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    position: relative;
`
const TodoFooter = styled.div`
    font-size: 13px;
    color: #888;
    position: absolute;
    bottom: 25px;
    left: 50%;
    margin-left: -50px;
`
