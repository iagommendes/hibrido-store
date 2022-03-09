import { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import ReactStars from "react-stars";
import { Container } from "../Container";
import { ProductVariants } from "../ProductVariants";
import { Text } from "../Text";
import { StyledProductDetails } from "./style";
import { Counter } from "../Counter";
import { Social } from "../Social";
import { ZipInfo } from "../ZipInfo/style";
import { Button } from "../Button";

export const ProductDetails = () => {
  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      count: number;
      rate: number;
    };
  }

  const [product, setProducts] = useState<Product>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products/1");
      setProducts(await response.json());
    };
    fetchData();
  }, []);

  const images = [
    {
      original: `${product?.image}`,
    },
    {
      original: `${product?.image}`,
    },
    {
      original: `${product?.image}`,
    },
  ];

  return (
    <Container
      maxWidth="1191px"
      margin="0 auto"
      padding="2rem 1.5rem"
      display="flex"
      width="1240px"
      justifyContent="space-between"
    >
      <ProductVariants />
      <ReactImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showBullets={true}
      />
      <StyledProductDetails>
        <Text value={product?.title} />
        <ReactStars size={24} value={product?.rating.rate} edit={false} />
        <Text color="#000" value={product?.price}></Text>
        <Text value={product?.description}></Text>
        <hr></hr>
        <Text value="Reference: 00000001"></Text>
        <Text value="Cor: N/A"></Text>
        <ProductVariants
          flexDirection="row"
          width="20px"
          height="20px"
          marginRight="0.5rem"
        />
        <Counter />
        <Button value={"add to cart"} disabled={false} />
        <ZipInfo />
        <Social />
      </StyledProductDetails>
    </Container>
  );
};
