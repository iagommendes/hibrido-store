import { useState } from "react";
import { StyledCounter } from "./style";

export const Counter = () => {
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
    <StyledCounter>
      <p>Product Quantity: {freeShip}</p>

      <div>
        <button onClick={removeShippingFlag}>-</button>
        <input
          value={freeShip}
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="5"
        />
        <button onClick={addshippingFlag}>+</button>
      </div>


      {freeShip > 10 ? <span>free shipping!</span> : <span></span>}
    </StyledCounter>
  );
};
