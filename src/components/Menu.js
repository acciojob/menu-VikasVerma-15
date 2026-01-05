import React from "react";

function Menu({ items }) {
  return (
    <div>
      {items.map(item => (
        <div
          key={item.id}
          data-test-id={`menu-item-${item.category}`}
        >
          <h3>{item.title}</h3>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Menu;
