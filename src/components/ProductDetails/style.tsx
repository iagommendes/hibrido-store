import styled from "styled-components";

export const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }

  hr {
    margin: 0.8rem 0;
  }

`;
