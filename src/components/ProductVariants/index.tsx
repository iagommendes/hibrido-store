import { StyledProductVariants } from "./style";
import { Props } from "./types";

export const ProductVariants = (props: Props) => {
  return (
    <StyledProductVariants {...props}>
      {[...Array(2)].map((_, i) => (
        <img key={i} src="https://picsum.photos/200/300" alt="teste" />
      ))}
      <img src="https://picsum.photos/200/300" alt="teste" />
    </StyledProductVariants>
  );
};
