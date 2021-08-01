import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
`

export const Heading = styled.div`
  margin-top: 16.5vh;
  text-align: center;
  flex-direction: column;
  display: flex;

  > h1 {
    font-weight: 500;
    font-size: 26px;
    line-height: 48px;
    color: #393c41;
  }
  > h2 {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: #5c5e62;
  }

  @media (min-width: 600px) {

    > h1 {
      font-size: 40px;
    }
  }
`;

export const Content = styled.div`
  display  : flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  margin-top: 50px;
  padding: 0 50px;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Description = styled.div`
  text-align: justify;
  font-size: 12px;
  
  @media (min-width: 600px) {
    font-size: 16px;
    margin: 20px;
    text-align: center;
  }
`

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 60px;

  @media (min-width: 600px) {
    width: 420px;
    height: 420px;
    margin-top: 0px;
  }
`;
