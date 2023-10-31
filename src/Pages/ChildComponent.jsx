import React, { useState } from 'react';

// NewComponent for Item and its children
function ItemComponent({ childItems, onAddChild }) {
  return (
    <div>
      <ul>
        {childItems.map((child, childIndex) => (
          <li key={childIndex}>Number of {child}</li>
        ))}
      </ul>
      <button onClick={onAddChild}>Add Child Item</button>
    </div>
  );
}

export default function ChildComponent() {
  const [items, setItems] = useState([]);
  const [newItemIndex, setNewItemIndex] = useState(1);

  const addItem = () => {
    setItems([...items, `Item ${newItemIndex}`]);
    setNewItemIndex(newItemIndex + 1);
  };

  const addChildItem = (itemIndex) => {
    const updatedItems = [...items];
    const childCount = updatedItems[itemIndex].split('Child').length - 1;
    updatedItems[itemIndex] += ` Child ${childCount + 1}`;
    setItems(updatedItems);
  }

  return (
    <div>
      <div>
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <ItemComponent
              childItems={items
                .slice(index, index + 1)
                .map((item, i) => `Child ${item.split('Child').length}`)
              }
              onAddChild={() => addChildItem(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
