import {
  Container,
  ProductCollumn,
  ProductDetails,
  ProductImage,
  ProductRow,
  Share,
} from "./style";
import starIcon from "../../assets/staricon.svg";
import facebookIcon from "../../assets/icons8-facebook.svg";
import WppIcon from "../../assets/icons8-whatsapp.svg";
import PinterestIcon from "../../assets/icons8-pinterest.svg";
import ImageGallery from "react-image-gallery";
import { useState } from "react";

const n = 5;
const x = 2;

const images = [
  {
    original: "https://picsum.photos/id/1/600/600",
  },
  {
    original: "https://picsum.photos/id/2/600/600",
  },
  {
    original: "https://picsum.photos/id/3/600/600",
  },
];

export function ProductGallery() {
  const [freeShip, setFreeShip] = useState(1);

  const addshippingFlag = () => {
    setFreeShip(freeShip + 1);
  };

  const removeShippingFlag = () => {
    if (freeShip > 1) {
      setFreeShip(freeShip - 1);
    }
  };

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
        <h3>Work Shirt</h3>
        <div>
          {[...Array(n)].map((_, i) => (
            <img width={20} key={i} src={starIcon} alt="star" />
          ))}
        </div>
        <p> $19.99</p>
        <p>Up to 3x $9.60, 1% of interest</p>
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
