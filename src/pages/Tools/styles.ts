import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 24px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
      width: 280px;
      height: 40px;
      border: 10px;
      padding-left: 15px;
      border-radius: 4px;
      color: #888888;
      margin-right: 30px;
    }
    p {
      margin-left: 5px;
      color: #888888;
    }
  }
  button {
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
`;

export const ListTools = styled.ul`
  margin-top: 80px;

  li {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;

    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;

    a {
      text-decoration: none;
      font-size: 24px;
      color: #3a3a3a;
      max-width: 450px;
      line-height: 56px;
    }

    button {
      width: 80px;
      height: 40px;
      background: #f11e43;
      border-radius: 5px;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.2, '#f11e43')};
      }
    }
  }
`;

export const Tags = styled.ul`
  margin-top: 10px;
  span {
    background: #eee;
    color: #333;
    border-radius: 2px;
    font-size: 12px;
    font-weight: 600;
    height: 20px;
    padding: 3px 4px;
    margin-left: 10px;
  }
`;
