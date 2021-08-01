import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  /* clip: rect(auto, auto, auto, auto); */
`;

export const Content = styled.header`
  z-index: 3;

  display: flex;
  justify-content: space-between;

  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: #373737;
      margin-left: 10px;
      font-size: 18px;
    }

    @media (min-width: 600px) {
      flex-direction: row;

      > span {
        font-size: 29px;
      }
    }
  }

  > button {
    color: #373737;
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const DropboxLogo = styled.img`
  width: 40px;
  height: 40px;
`;
