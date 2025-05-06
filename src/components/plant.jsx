export default function Plant({ plant, addCarts }) {
  return (
    <div>
      <b>{plant.plantName}</b>{" "}
      <button onClick={() => addCarts(plant)}>Add to Cart</button>
    </div>
  );
}
