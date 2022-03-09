import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    height: 450px;
    background: rgba(255,255,255,.95);
`

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 50px;
    color: black;
    width: 100%;
    text-align: center;
    height: 30px;
`

export const ListOfReposContainer = styled.h1`
    height: 350px;
    width: 100%;
    padding: 10px;
`

export const Repo = styled.h2`
    width: 100%;
    height: 80px;
    background: rgba(0,0,0,.05);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    h2 {
        font-size: 15px;
        width: 100%;
        overflow: hidden;
        color: #444;
    }
    p {
        font-size: 12px;
        font-weight: 400;
        color: #777;
        width: 100%;
        height: 30px;
        overflow: hidden;
        line-height: 1.3;
        margin-top: 10px;
    }
`