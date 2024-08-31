import React, { useState, useEffect } from "react";

const Todo = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("items"));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleAddItem = () => {
    if (newItem.trim() === "") return;
    if (editIndex !== null) {
      const updatedItems = items.map((item, index) =>
        index === editIndex ? newItem : item
      );
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, newItem]);
    }
    setNewItem("");
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleEditItem = (index) => {
    setNewItem(items[index]);
    setEditIndex(index);
  };

  const handleDeleteList = () => {
    setItems([]);
  };

  return (
    
    <div   style={{ padding: "20px", maxWidth: "400px", margin: "auto", backgroundColor: "#1a1a2e", color: "#fff", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center" }}>Grocery Shopping</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ margin: "10px 0", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#3f51b5", padding: "10px", borderRadius: "4px" }}>
            {item}
            <div>
              <button onClick={() => handleEditItem(index)} style={{ marginRight: "5px" }}>✏️</button>
              <button onClick={() => handleDeleteItem(index)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add something to your list"
        style={{ width: "calc(100% - 60px)", padding: "10px", borderRadius: "4px", marginRight: "10px" }}
      />
      <button onClick={handleAddItem} style={{ padding: "10px 20px", borderRadius: "4px", backgroundColor: "#7b1fa2", color: "#fff", border: "none" }}>
        {editIndex !== null ? "Update" : "Add"}
      </button>
      <button onClick={handleDeleteList} style={{ marginTop: "20px", padding: "10px", borderRadius: "4px", backgroundColor: "#e53935", color: "#fff", border: "none", display: "block", width: "100%" }}>
        Delete List
      </button>
      
    </div>
    
  );
};

export default Todo;
