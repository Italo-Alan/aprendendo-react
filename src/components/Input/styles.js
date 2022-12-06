import styled from "styled-components";

export const InputContainer = styled.div`
    max-width: 275px;
    width: 100%;
    height: 30px;
    border-radius: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: 10px;
`
export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #fff;
    border: 0;
    flex: 1;
    height: 30px;
`

export const ErrorText = styled.p`
    font-family: 'Nunito', sans-serif;
    color: #FF0000;
    font-size: 12px;
    position: relative;
    bottom: 5px;
    margin: 0 ;
`