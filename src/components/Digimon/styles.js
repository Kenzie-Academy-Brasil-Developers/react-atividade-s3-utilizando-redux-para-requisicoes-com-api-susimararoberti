import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 40%;
  background-image: linear-gradient(
    to bottom right,
    rgb(132, 250, 171),
    rgb(189, 252, 192),
    rgb(232, 253, 220)
  );
  border: 3px solid rgb(1, 34, 9);
  border-radius: 10px;
  margin: 1rem 0;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 22px;
    color: rgb(1, 56, 15);
  }

  img {
    width: 80%;
    height: 80%;
    margin-bottom: 20px;
    border-radius: 10px;
  }
`;
