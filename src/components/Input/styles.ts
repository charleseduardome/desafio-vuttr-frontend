import styled from 'styled-components';

export const Container = styled.div`
  input {
    margin-top: 20px;
    width: 280px;
    height: 40px;
    border: 10px;
    padding-left: 15px;
    border-radius: 4px;
    color: #888888;
  }
`;

export const Error = styled.div`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
