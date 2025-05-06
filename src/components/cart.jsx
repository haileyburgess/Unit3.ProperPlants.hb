function Cart({ cart, addCarts, removeCarts }) {
  return (
    <>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No plants in cart</p>
      ) : (
        <>
          {cart.map((cart) => {
            return (
              <div key={cart.id}>
                <button
                  onClick={() => {
                    removeCarts(cart);
                  }}
                  style={{ color: "red" }}
                >
                  -
                </button>{" "}
                <span>
                  {cart.plantName}: {cart.quantity}Number in Cart
                </span>{" "}
                <button
                  onClick={() => addCarts(cart)}
                  style={{ color: "darkgreen" }}
                >
                  +
                </button>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
export default Cart;
