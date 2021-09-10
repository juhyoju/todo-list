import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import useTodoInput from './useTodoInput'
import {
    TodoInputWrap,
    TodoInputBox,
    TodoSaveButton,
    TodoAllDeleteButton
} from './TodoInputStyle'

const TodoInput = ({ setTodos, todos }) => {
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
                <TodoSaveButton>
                    <FontAwesomeIcon icon={faPlusCircle} onClick={onAddTodo} />
                </TodoSaveButton>
            </TodoInputWrap>

            <TodoAllDeleteButton onClick={onDeleteAll}>
                전체 삭제
            </TodoAllDeleteButton>
        </>
    )
}

export default TodoInput
