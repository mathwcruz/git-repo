import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: "Poppins";
  }
`;

export const Template = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Header = styled.header`
  padding: 4rem 0;
  background-color: #161B22;

  div {
    margin: 0 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
    font-size: 2.5rem;
    color: white;
    text-align: center;
    }
  }
`;

export const Content = styled.main`
  margin: 10rem auto;

  form {
    margin: 3rem auto;
    display: grid;
    align-items: center;
    justify-content: center;

    input {
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      font-size: 2rem;
      color: #161B22;
      text-align: center;
      border: 2px solid #161B22;
      outline: none;
      &:focus {
        border: 2px solid #5C6BC0;
      }
    }

    button {
      margin: 4rem auto 0 auto;
      border: none;
      outline: none;
      border-radius: 0.5rem;
      padding: 1.5rem 5rem;
      background-color: #161B22;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.8);
      transition: background 0.3s ease-in-out;
      text-transform: uppercase;
      &:hover {
        background-color: #5C6BC0;
        transform: translateY(4px);
        transition: 0.4s ease-in-out;
      }
    }
  }

  h1 {
    font-size: 3rem;
    color: #161B22;
    text-align: center;

    span {
      color: #5C6BC0;
      font-size: 3.2rem;
      text-align: center;
    }
  }
`;

const fadeInList = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
`;

export const List = styled.section`
  margin: 0 4rem 4rem 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.2rem;
  list-style: none;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 1.2rem;
  }

  li {
    animation: 1.3s ${fadeInList} ease-in-out;
    padding: 2rem;
    background-color: #fff;
    border-radius: 0.4rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.6);
    &:hover {
      transform: translateY(-3px);
      transition: 0.3s ease-in-out;
    }

    div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        border-radius: 1.5rem;
        width: 15rem;
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.8);
      }
    }

    div + div {
      margin-left: 0.5rem;
      padding: 1rem;
      text-align: left;

      h2 {
        font-size: 2rem;
        color: #5C6BC0;
        font-weight: bold;
      }

      p {
        margin: 0.5rem auto;
        font-size: 1.8rem;
        font-weight: 500;
      }

      p + p {
        font-size: 1.5rem;
        color: tan;
        font-weight: bold;
        margin: 0.7rem auto;
      }

      a {
        outline: none;
        font-size: 1.6rem;
        color: #5C6BC0;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s;
        &:hover {
          color: #161B22;
        }
      }

      span {
        margin-left: 2rem;
      }

      button {
        position: absolute;
        top: 0.6rem;
        right: 1.2rem;
        border: none;
        outline: none;
        background-color: transparent;
        padding: 0.3rem;

        span {
          background-color: #5C6BC0;
          color: white;
          padding: 0.5rem;
          border-radius: 0.4rem;
          font-size: 1.4rem;
          transition: background 0.3s ease-in-out;
          &:hover {
            background-color: transparent;
            color: #161B22;
          }
        }
      }
    }
  }
`;