import styled from 'styled-components';

export const HeaderSection = styled.header`
    display: flex;
    flex-direction: column;
    padding: 0;
`

export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 15px 0;
    color: black;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    width: 100%;
`

export const HeaderInputContainer = styled.div`
    padding: 10px 16px;
    margin-top: 5%;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderInput = styled.input`
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid black;
    padding: 0 16px;
    color: #444;
`

export const HeaderSearchButton = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 10px;
    border: none;
    background: #FF7A00;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    transition: ease .3s;

    &:hover {
        transition: ease .3s;
        cursor: pointer;
        background: black;
        color: white;
    }
`