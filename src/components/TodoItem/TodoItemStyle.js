import styled from 'styled-components'

export const TodoList = styled.li`
    border: 1px solid #ddd;
    padding: 25px;
    box-shadow: 3px 3px 0 #eee;
    margin-bottom: 15px;
    background: ${props => (props.isDone ? '#eee' : '#fff')};
    display: flex;
`

export const TodoText = styled.p`
    flex: 2 1 0%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: ${props => (props.isDone ? 'line-through' : 'normal')};
    color: ${props => (props.isDone ? '#aaa' : '#222')};
`
