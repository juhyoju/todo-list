import React from 'react'
import useTodoInput from './useTodoInput'
import styled from 'styled-components'

const TodoInput = ({ setTodos, todos, theme }) => {
    const { onChange, onAddTodo, onKeyPress, onDeleteAll, newTodo } =
        useTodoInput(todos, setTodos)
    return (
        <>
            <TodoInputWrap>
                <TodoInputBox
                    type='text'
                    value={newTodo}
                    onChange={onChange}
                    placeholder='오늘의 할 일을 입력하세요'
                    onKeyPress={onKeyPress}
                />
                <TodoSaveButton onClick={onAddTodo}>+</TodoSaveButton>
            </TodoInputWrap>

            <TodoAllDeleteButton onClick={onDeleteAll}>
                전체 삭제
            </TodoAllDeleteButton>
        </>
    )
}

export default TodoInput

const TodoInputWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 25px 0;
`

const TodoInputBox = styled.input`
    border: none;
    outline: none;
    box-shadow: 0 5px 10px rgba(100, 100, 100, 0.15),
        0 2px 4px rgba(100, 100, 100, 0.15);
    padding: 5px 10px;
    height: 50px;
    width: calc(100% - 50px);
`

const TodoSaveButton = styled.button`
    font-size: 21px;
    width: 50px;
    color: #fff;
    background: #bbb;
    box-shadow: 0 5px 10px rgba(100, 100, 100, 0.15),
        0 2px 4px rgba(100, 100, 100, 0.15);
`
const TodoAllDeleteButton = styled.button``
