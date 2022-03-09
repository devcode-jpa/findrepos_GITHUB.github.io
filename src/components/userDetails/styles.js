import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Name = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #444;
`

export const Username = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #777;
  padding: 5px;
`

export const Description = styled.p`
  width: 850px;
  height: 30px;
  padding: 10px 0;
  font-size: 15px;
  display: flex;
  justify-content: center;
  color: #777;
  line-height: 1.3;

  @media (max-width: 430px) {
    width: 250px;
  }
`
