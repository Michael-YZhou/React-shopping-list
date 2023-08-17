import { useState } from "react";

function AddItemForm({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // item must has description
    if (!description) return;
    // create the new item using the form info
    const newItem = {
      title: `${quantity} ${unitArr[unit]} ${description}`,
    };
    // add the new item to the item list (updates the items state)
    onAddItems(newItem);
  }

  const unitArr = [" ", "kg", "box"];

  return (
    <div>
      <h3>What do you 🛍️ need?</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={(e) => setQuantity(Number(e.target.value))}
        ></input>

        <select
          // value={quantity}
          onChange={(e) => setUnit(Number(e.target.value))}
        >
          {unitArr.map((unit, i) => (
            <option value={i} key={unit}>
              {unit}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>

        <button>Add</button>
      </form>
    </div>
  );
}

export default AddItemForm;
