import Plant from "./plant";

function Plants({ plants, addCarts }) {
  return (
    <div className="Plants">
      <h2>Plants</h2>
      <br></br>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addCarts={addCarts}/>
        ))}
    </div>
  );
}

export default Plants;
