import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const Heading = styled.div`
  margin-top: 16.5vh;
  text-align: center;
  display: flex;

  > h1 {
    font-weight: 500;
    font-size: 26px;
    line-height: 48px;
    color: #393c41;
  }

  @media (min-width: 600px) {
    flex-direction: row;

    > h1 {
      font-size: 40px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  max-width: 1500px;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  > h1 {
    margin: 20px 0;
    text-align: center;
    font-weight: bold;
    color: #34363a;
    font-size: 16px;
  }

  > p {
    text-align: center;
    font-size: 12px;
    max-height: 100px;
    display: none;

  }

  @media (min-width: 600px) {
    > p {
      font-size: 16px;
      display: initial;
    }

    > h1 {
      font-size: 20px;
    }
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  @media (min-width: 600px) {
    width: 220px;
    height: 220px;
  }
`;
