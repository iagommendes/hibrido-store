import styled from "styled-components";
import { Props } from "./types";
export const StyledText = styled.div<Props>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
`;
