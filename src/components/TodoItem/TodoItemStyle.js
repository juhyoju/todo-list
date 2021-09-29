import styled from 'styled-components'

export const TodoList = styled.li`
    border: 1px solid ${props => props.theme.borderColor};
    padding: 25px;
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
    background: transparent;
    font-size: 17px;
    font-family: 'NanumSquareRound', 'Noto Sans', 'Noto Sans CJK KR', sans-serif;
    color: ${({ theme }) => theme.textColor};
    border-bottom: 1px solid ${props => props.theme.borderColor};
`
export const TodoAction = styled.button`
    color: ${({ theme }) => theme.textColor};
`
