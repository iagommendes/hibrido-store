import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#ff0000")};
  border: none;
  width: 100%;
  height: 3rem;
  cursor: pointer;
  color: #fff;
`;
