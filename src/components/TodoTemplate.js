import React, { useState } from 'react'
import TodoInput from './TodoInput/TodoInput'
import TodoList from './TodoList/TodoList'
import DateString from './DateString/DateString'
import ThemeToggle from 'theme/ThemeToggle'
import { useTheme } from 'theme/themeProvider'
import styled from 'styled-components'

const TodoTemplate = id => {
    // 가져오기
    const onGetTodo = window.localStorage.getItem('todoArray')
    const [todos, setTodos] = useState(JSON.parse(onGetTodo) ?? [])

    const [ThemeMode, toggleTheme] = useTheme()

    return (
        <TodoWrap>
            <div style={{ width: '100%', maxWidth: '1000px' }}>
                <header>
                    <DateString />
                </header>

                <article style={{ marginBottom: '50px' }}>
                    <TodoInput todos={todos} setTodos={setTodos} />

                    <TodoList
                        title={'해야할 일'}
                        todos={todos}
                        setTodos={setTodos}
                        checkedList={false}
                        mode={ThemeMode}
                    />

                    <TodoList
                        title={'완료한 일'}
                        todos={todos}
                        setTodos={setTodos}
                        checkedList={true}
                        mode={ThemeMode}
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
