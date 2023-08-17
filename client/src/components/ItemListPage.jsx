import { useEffect, useState } from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";

function ItemListPage() {
  const [items, setItems] = useState([]);

  async function handleAddItem(item) {
    console.log(item);
    // call to backend add new item to db,
    // db will return the newly added data
    const res = await fetch(
      "https://react-shopping-list.onrender.com/api/item",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    console.log(res);
    const resJson = await res.json();
    console.log(resJson);
    // instead of item , add the res to the state
    setItems((items) => [...items, resJson]);
  }

  async function handdleDeleteItem(id) {
    const updatedItems = items.filter((item) => item._id != id);
    setItems(updatedItems);

    await fetch(`https://react-shopping-list.onrender.com/api/item/${id}`, {
      method: "DELETE",
    });
  }

  async function handdleToggleItem(id) {
    // if we update the state and the database together,
    // don't rely on the state value to update the db,
    // setState is a async function, it take time to set state value.
    // if the information that we need is already available,
    // we should have a single piece of truth(info) to update the state and databese.
    // in this case we store the info in updatedItems and use it in different places.
    const updatedItems = items.map((item) =>
      // toggle the checked attr for the item which checkbox has been ticked
      item._id === id ? { ...item, checked: !item.checked } : item
    );

    // use updatedItems to set state value
    setItems(updatedItems);

    // find the item that has been toggled in the updatedItems
    // we need to locate it again and send to PUT router,
    // so the item.checked status can be updated in db.
    let updatedItem;
    for (const item of updatedItems) {
      if (item._id === id) {
        updatedItem = item; // state hasn't been updated yet???
      }
    }

    // also use updatedItems(signle piece of info) to update database
    const res = await fetch(
      `https://react-shopping-list.onrender.com/api/item/${id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      }
    );
    const resJson = await res.json();
    console.log(resJson);
  }

  async function fetchItems() {
    const res = await fetch(
      "https://react-shopping-list.onrender.com/api/item"
    );
    console.log(res);
    const resJson = await res.json();
    console.log(resJson);
    setItems(resJson);
    console.log(resJson);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <AddItemForm onAddItems={handleAddItem} />
      <ItemList
        items={items}
        onToggleItem={handdleToggleItem}
        onDeleteItem={handdleDeleteItem}
      />
    </div>
  );
}

export default ItemListPage;
