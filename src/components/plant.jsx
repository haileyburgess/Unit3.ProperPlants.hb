export default function Plant({ plant, addCarts }) {
  return (
    <div className="Plant">
      <h3>{plant.name}</h3>{" "}
      <p style= {{fontSize: "4rem"}}>{plant.image}</p>
      <button onClick={() => addCarts(plant)}>Add to Cart</button>
    </div>
  );
}
