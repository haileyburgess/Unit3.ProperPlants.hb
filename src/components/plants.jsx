import Plant from "./plant";

function Plants({ plants, addCarts }) {
  return (
    <>
      <h2>Plants</h2>
      <>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addCarts={addCarts} />
        ))}
      </>
    </>
  );
}

export default Plants;
