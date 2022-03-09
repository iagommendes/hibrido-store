import {
  Container,
  ProductCollumn,
  ProductDetails,
  ProductImage,
  ProductRow,
  Share,
} from "./style";
import facebookIcon from "../../assets/icons8-facebook.svg";
import WppIcon from "../../assets/icons8-whatsapp.svg";
import PinterestIcon from "../../assets/icons8-pinterest.svg";
import ImageGallery from "react-image-gallery";
import { useEffect, useState } from "react";

import ReactStars from "react-stars";

const x = 2;

export function ProductGallery() {
  const [freeShip, setFreeShip] = useState(1);

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

  const nota = product?.rating.rate;
  console.log(nota);

  const addshippingFlag = () => {
    setFreeShip(freeShip + 1);
  };

  const removeShippingFlag = () => {
    if (freeShip > 1) {
      setFreeShip(freeShip - 1);
    }
  };

  console.log(product);

  return (
    <Container>
      <ProductCollumn>
        {[...Array(x)].map((_, i) => (
          <img key={i} src="https://picsum.photos/200/300" alt="teste" />
        ))}
        <img src="https://picsum.photos/200/300" alt="teste" />
      </ProductCollumn>
      <ProductImage>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
          showBullets={true}
        />
      </ProductImage>
      <ProductDetails>
        <h3>{product?.title || ""}</h3>

        <div>
          <ReactStars size={24} value={nota} edit={false} />
        </div>

        <p className="product-price">$ {product?.price}</p>
        <hr></hr>
        <p>Product Refenrece: 123456789</p>
        <p>Product Color: Black</p>
        <ProductRow>
          {[...Array(x)].map((_, i) => (
            <img key={i} src="https://picsum.photos/200/300" alt="teste" />
          ))}
          <img src="https://picsum.photos/200/300" alt="teste" />
        </ProductRow>

        <p>Product Size: M</p>
        <p>Product Quantity: {freeShip}</p>
        <button onClick={removeShippingFlag}>remove</button>
        <input
          value={freeShip}
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="5"
        />
        <button onClick={addshippingFlag}>add</button>
        <button>Add to Cart</button>
        <p>ZIP</p>

        {freeShip > 10 ? <span>FREE SHIPPING</span> : <span></span>}
        <a href="http://">I don't know my zipcode</a>
        <button>Calculate Shipping</button>
        <div>
          <p>Share</p>
          <Share>
            <img src={facebookIcon} alt="teste" />
            <img src={WppIcon} alt="teste" />
            <img src={PinterestIcon} alt="teste" />
          </Share>
        </div>
      </ProductDetails>
    </Container>
  );
}
