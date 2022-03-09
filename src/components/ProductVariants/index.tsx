import { StyledProductVariants } from "./style";
import { Props } from "./types";

const variants = 3

const images = [
  {
    original: "https://i.ibb.co/bdBJf8Z/mochila-blac.png",
  },
  {
    original: "https://i.ibb.co/n1Pvm5r/mochila-gray.png",
  },
  {
    original: "https://i.ibb.co/rw17Z7W/mochila-yellow.png",
  },
];

export const ProductVariants = (props: Props) => {
  return (
    <StyledProductVariants {...props}>
      {Array.from({ length: variants }).map((_, index) => (
        <div>
          <img src={images[index].original} alt="product" />
        </div>
      ))}
    </StyledProductVariants>
  );
};
