function Cart({ cart, addCarts, removeCarts }) {
  return (
    <div className="Cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No plants in cart</p>
      ) : (
        <ul>
          {cart.map((cart) => {
            return (
              <li key={cart.id} name={cart.name}>
                <span>
             {cart.name}: {cart.quantity}
                </span>{" "}
                <button
                  onClick={() => {
                    removeCarts(cart);
                  }}
                  style={{ color: "red" }}
                >
                  -
                </button>{" "}
                <button
                  onClick={() => addCarts(cart)}
                  style={{ color: "darkgreen" }}
                >
                  +
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default Cart;
