import { StyledButton } from "./style";
import { Props } from "./type";

export const Button = (props: Props) => {
  return <StyledButton {...props}>{props.value}</StyledButton>;
};
