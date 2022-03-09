import styled from "styled-components";

export const Container = styled.header`
  background: #fff;
  img {
    width: 200px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  align-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;

  @media (max-width: 768px) {
    height: 400px;
  }

  div {
    width: 511px;
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  a {
    font-size: 1.3rem;
    font-weight: 600;
    color: #000;
    text-decoration: none;
  }

  input {
    padding: 0.5rem;
    border-radius: 1rem;
    border: 0.2rem solid #ff0000;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
