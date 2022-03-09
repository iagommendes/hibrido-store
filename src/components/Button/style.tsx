import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#ccc" : "red")};
`;
