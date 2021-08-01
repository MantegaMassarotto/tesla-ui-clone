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
    font-size: 14px;
    line-height: 20px;
    color: #5c5e62;
  }

  @media (min-width: 600px) {

    > h1 {
      font-size: 40px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const ContactForm = styled.div`
  width: 100%;
  height: 380px;
  background-color: #F0F0F0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  max-width: 700px;
  margin-bottom: 20px;

  > input, textarea {
    background: white;
    color: black;
    font-size: 16px;
    padding: 10px 8px;
    border: none;
    outline: none;
    border-radius: 2px;
    margin-bottom: 20px;

    &:focus {
      /* background: white; */
    }
  }

  > span {
    &:not(:nth-child(2)) {
      margin: 10px 0;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  > button {
    background: #1a1720;
    color: #FFF;
    opacity: 0.8;

    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 13px 40px;
    border-radius: 20px;
    border: none; // <<<< remove a borda
    outline: 0;
    cursor: pointer; // <<<< o cursor fica com a o icone na mãozinha

    &.white {
      background: #FFF;
      color: #000;

      opacity: 0.65;
    }

    & + button {
      margin: 10px 0 0;
    }

  }

  @media (min-width: 600px) {
    flex-direction: row;
    
    > button + button {
      margin: 0 0 0 10px;
    }
  }
`;
