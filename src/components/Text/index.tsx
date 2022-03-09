import { StyledText } from "./style";
import { Props } from "./types";

export const Text = (props: Props) => {
  return <StyledText {...props}>{props.value}</StyledText>;
};
