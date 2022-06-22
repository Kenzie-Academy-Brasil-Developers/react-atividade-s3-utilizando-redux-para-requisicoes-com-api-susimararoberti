import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: linear-gradient(
    to bottom right,
    rgb(83, 83, 250),
    rgb(135, 135, 245),
    rgb(197, 197, 253)
  );
  height: 200px;
  width: 50%;
  margin-top: 6vh;
  border-radius: 5px;

  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: italic;
    color: rgb(1, 13, 68);
    width: 80%;
    height: 20%;
    margin: 15px 0 0 0;
  }

  p {
    margin: 8px 0;
    padding-top: 8px;
    color: rgb(230, 0, 0);
    background-color: rgb(255, 211, 211);
    border-radius: 5px;
    width: 40%;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 700;
    height: 12%;
  }
`;

export const Input = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 85%;
  height: 40%;
  background-color: rgb(1, 56, 88);
  border-radius: 8px;

  input {
    height: 25px;
    border-radius: 5px;
    border: 2px solid rgb(1, 10, 88);
    padding: 6px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: rgb(1, 10, 88);
    width: 65%;
    margin-left: 3px;
  }

  button {
    height: 40px;
    padding: 6px;
    border-radius: 5px;
    background-color: #fff;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 12px;
    color: rgb(0, 5, 46);
    width: 25%;
    margin-left: 10px;
    cursor: pointer;
  }

  button:hover {
    transition: 0.3s;
    background-color: rgb(16, 101, 212);
    color: white;
  }
`;
