import { StyledContainer } from "./style";
import { Props } from "./types";

export const Container = (props: Props) => {
  const { children } = props;

  return <StyledContainer {...props}>{children}</StyledContainer>;
};
