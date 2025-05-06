import Plant from "./plant";

function Plants({ plants, addCarts }) {
  return (
    <div className="Plants">
    <h1>Proper Plants</h1>
      <h2>Plants</h2>
      <>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addCarts={addCarts}/>
        ))}
      </>
    </div>
  );
}

export default Plants;
