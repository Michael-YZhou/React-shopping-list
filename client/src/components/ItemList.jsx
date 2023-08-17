import Item from "./item";

function ItemList({ items, onToggleItem, onDeleteItem }) {
  return (
    <div>
      {items.map((item) => (
        // have an onchange to toggle the checkbox and update db
        <Item
          key={item._id}
          item={item}
          onToggleItem={onToggleItem}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
}

export default ItemList;
