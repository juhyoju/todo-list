import styled from 'styled-components'

export const TodoTitle = styled.p`
    margin: 50px 0 15px;
    font-weight: bold;
    opacity: ${props => (props.isDone ? '0.6' : '1')};
    color: ${({ theme }) => theme.textColor};
`

export const TodoNull = styled.div`
    color: ${props => (props.mode === 'dark' ? '#666' : '#aaa')};
    font-size: 14px;
    padding: 10px;
`

export const TodoAllDeleteButton = styled.button`
    color: ${({ theme }) => theme.textColor};
    font-size: 14px;
`
