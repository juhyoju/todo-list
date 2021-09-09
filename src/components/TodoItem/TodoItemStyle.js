import styled from 'styled-components'

export const TodoList = styled.li`
    border: 1px solid #ddd;
    padding: 25px;
    box-shadow: 3px 3px 0 #eee;
    margin-bottom: 15px;
    background: ${({ theme }) => theme.todoBg};
    opacity: ${props => (props.isDone ? '0.4' : '1')};
    display: flex;
`

export const TodoText = styled.p`
    flex: 2 1 0%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: ${props => (props.isDone ? 'line-through' : 'normal')};
    color: ${({ theme }) => theme.textColor};
`
export const TodoEditInput = styled.input`
    flex: 2 1 0%;
`
export const TodoAction = styled.button`
    color: ${({ theme }) => theme.textColor};
`
