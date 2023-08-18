import ListGroup from "react-bootstrap/ListGroup";

function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <ListGroup.Item>
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
    </ListGroup.Item>
  );
}

export default Item;
