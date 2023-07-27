import React, { useContext } from 'react';
import { ItemContext } from './Items';

function SelectedItem() {
  const { selectedImg } = useContext(ItemContext);

  if (!selectedImg) {
    return <div>No item selected</div>; // Render a message when selectedImg is undefined
  }

  const { title, description, image } = selectedImg; // Destructure the properties from selectedImg

  return (
    <div>
      <h2>Selected Item</h2>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default SelectedItem;
