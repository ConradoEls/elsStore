import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  //Cart quantity
  const [count, setCount] = useState(0);

  //Product Detail toggle menu
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  //Data Product Detail
  const [productDetail, setProductDetail] = useState({});

  
  return (
    <Context.Provider value={{ count, setCount,isOpen, setIsOpen, open, close, productDetail, setProductDetail }}>
      {children}
    </Context.Provider>
  );
};
