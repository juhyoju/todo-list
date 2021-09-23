import styled from 'styled-components'

export const TodoTitle = styled.p`
    margin: 50px 0 15px;
    font-weight: bold;
`

export const TodoNull = styled.div`
    color: ${props => (props.mode === 'dark' ? '#666' : '#aaa')};
    font-size: 14px;
    padding: 10px;
`
