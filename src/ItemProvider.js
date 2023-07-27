
import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <ItemContext.Provider value={{ selectedImg, setSelectedImg }}>
      {children}
    </ItemContext.Provider>
  );
};
