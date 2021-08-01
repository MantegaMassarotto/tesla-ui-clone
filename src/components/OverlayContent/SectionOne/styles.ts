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
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 10px;
  padding: 0 50px;
  max-width: 1200px;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Item = styled.div`
  width: 150px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > svg {
    background-color: #484848;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    padding: 15px;
    color: white;
  }

  > span {
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
  }

  @media (min-width: 600px) {
    > svg {
      width: 120px;
      height: 120px;
      padding: 20px;
    }

    > span {
      font-size: 16px;
    }
  }
`;
