import styled from 'styled-components'

export const TodoInputWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 25px 0;
`

export const TodoInputBox = styled.input`
    color: #e6b74a;
    padding: 5px 10px;
    height: 50px;
    width: calc(100% - 50px);
    background: transparent;
    border-bottom: 1px solid #e6b74a;
    font-size: 17px;
`

export const TodoSaveButton = styled.button`
    font-size: 21px;
    width: 50px;
    color: #e6b74a;
`
