function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onToggleItem(item._id)}
      ></input>
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.title}
      </span>
      <button
        style={{ fontSize: "10px", border: 0 }}
        onClick={() => onDeleteItem(item._id)}
      >
        ❌
      </button>
    </div>
  );
}

export default Item;
