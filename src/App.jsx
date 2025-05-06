import { useState } from "react";
import "./index.css";
import Plants from "./components/plants";
import Cart from "./components/cart";
import PLANTS from "./data";

function App(){
  const [cart, setCart] = useState([]);


  const addCarts = (plant) => {
    const cartExists = cart.find((i) => i.id === plant.id);
    if (cartExists) {
      setCart(
        cart.map((cart) =>
          cart.id === plant.id
        ? {...cart, quantity: cart.quantity + 1 }
        : cart 
      )
      );
    } else {
      const item = {...plant, quantity: 1 };
      setCart([...cart,item]);
    }
  };
  const removeCarts = (cartToRemove) => {
    setCart(
      cart
      .map((cart) =>
        cart.id === cartToRemove.id
      ? {...cart, quantity: cart.quantity - 1 }
      : cart
    )
    .filter((cart) => cart.quantity > 0)
  );
  };
return (
  <>
  <Plants plants={PLANTS} addCarts={addCarts} />
  <Cart
  cart={cart}
  addCarts={addCarts}
  removeCarts={removeCarts}
  />
  </>
);
}



export default App;
