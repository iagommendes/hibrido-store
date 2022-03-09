import styled from "styled-components";
import { Props } from "./types";

export const StyledProductVariants = styled.div<Props>`
  display: flex;
  justify-content: flex-start;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  width: 126px;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }

  img {
    width: ${(props) => (props.width ? props.width : "100px")};
    height: ${(props) => (props.width ? props.width : "100px")};
    margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "1rem"};
    margin-right: ${(props) => (props.marginRight ? props.marginRight : "0")};
  }
`;
