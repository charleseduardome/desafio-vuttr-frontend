import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
      color: #3a3a3a;
    }

    input {
      margin-top: 20px;
      width: 280px;
      height: 40px;
      border: 10px;
      padding-left: 15px;
      border-radius: 4px;
      color: #888888;
    }

    button {
      margin-top: 20px;
      width: 80px;
      height: 40px;
      background: #069848;
      border-radius: 5px;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.2, '#069848')};
      }
    }
  }
  a {
    color: #999;
    display: block;
    margin-top: 14px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#999')};
    }
  }
`;
