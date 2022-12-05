import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2`
    font-family: 'Nunito', sans-serif;;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #fff;
`   
export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-radius: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`
export const InputText = styled.input`
    background-color: transparent;
    color: #fff;
    width: 100%;
    border: 0;
    height: 30px;
`

export const TitleLogin = styled.p`
    font-family: 'Nunito', sans-serif;;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`   
export const SubTitleLogin = styled.p`
    font-family: 'Nunito', sans-serif;;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
` 
export const EsqueciText = styled.p`
    font-family: 'Nunito', sans-serif;;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;

    color: #e5e44e;
` 
export const CriarText = styled.p`
    font-family: 'Nunito', sans-serif;;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;

    color: #E23DD7;
` 

export const Wrapper = styled.div`
    max-width: 300px;
`
export const Column = styled.div`
    flex: 1;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`