import Item from "./item";
import ListGroup from "react-bootstrap/ListGroup";

function ItemList({ items, onToggleItem, onDeleteItem }) {
  return (
    <ListGroup>
      {items.map((item) => (
        // have an onchange to toggle the checkbox and update db
        <Item
          key={item._id}
          item={item}
          onToggleItem={onToggleItem}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </ListGroup>
  );
}

export default ItemList;
