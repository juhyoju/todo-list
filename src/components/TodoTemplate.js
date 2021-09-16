import React, { useState } from 'react'
import TodoInput from './TodoInput/TodoInput'
import TodoList from './TodoList'
import DateString from './DateString'
import ThemeToggle from 'theme/ThemeToggle'
import { useTheme } from 'theme/themeProvider'
import styled from 'styled-components'

const TodoTemplate = id => {
    // 가져오기
    const onGetTodo = window.localStorage.getItem('todoArray')
    const [todos, setTodos] = useState(JSON.parse(onGetTodo) ?? [])

    const [ThemeMode, toggleTheme] = useTheme()

    const onDidTodo = todos.filter(todos => todos.isDone === true).length
    const onWillTodo = todos.filter(todos => todos.isDone === false).length

    return (
        <TodoWrap>
            <div style={{ width: '85%', maxWidth: '1000px' }}>
                <header>
                    <DateString />
                </header>

                <article style={{ marginBottom: '50px' }}>
                    <TodoInput todos={todos} setTodos={setTodos} />

                    <TodoList
                        title={'해야할 일'}
                        onWillTodo={onWillTodo}
                        todos={todos}
                        setTodos={setTodos}
                        checkedList={false}
                    />

                    <TodoList
                        title={'완료한 일'}
                        onDidTodo={onDidTodo}
                        todos={todos}
                        setTodos={setTodos}
                        checkedList={true}
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
