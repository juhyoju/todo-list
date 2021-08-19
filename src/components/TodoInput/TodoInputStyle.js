import styled from 'styled-components'

export const TodoInputWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 25px 0;
`

export const TodoInputBox = styled.input`
    border: none;
    outline: none;
    box-shadow: 0 5px 10px rgba(100, 100, 100, 0.15),
        0 2px 4px rgba(100, 100, 100, 0.15);
    padding: 5px 10px;
    height: 50px;
    width: calc(100% - 50px);
`

export const TodoSaveButton = styled.button`
    font-size: 21px;
    width: 50px;
    color: #fff;
    background: #bbb;
    box-shadow: 0 5px 10px rgba(100, 100, 100, 0.15),
        0 2px 4px rgba(100, 100, 100, 0.15);
`
export const TodoAllDeleteButton = styled.button``
