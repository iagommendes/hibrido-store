import styled, { css } from "styled-components";
import {
  border,
  color,
  flexbox,
  layout,
  space,
  background,
  position,
  opacity,
  gridTemplateColumns,
  boxShadow,
} from "styled-system";
import { Props } from "./types";

export const StyledContainer = styled.div<Props>`
  display: flex;
  transition: all 300ms;
  ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;
      transition: all 300ms;
      &:hover {
        background-color: #fff1e6;
      }
    `}
    ${color}
    ${space}
    ${layout}
    ${border}
    ${flexbox}
    ${position}
    ${background}
    ${opacity}
    ${gridTemplateColumns}
    ${boxShadow}


}
`;
