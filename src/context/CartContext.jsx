import { createContext, useContext, useReducer, useState } from "react";

const CartContext = createContext();

export function CartContextProvider({ cartReducer, initialState, children }) {
  return (
    <CartContext.Provider value={useReducer(cartReducer, initialState)}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}

const CheckCartItemContext = createContext();

export function CheckCartItemContextProvider({ children }) {
  const [checkedItem, setCheckedItem] = useState([]);

  const handleCheckItem = (checked, id) => {
    if (checked) {
      setCheckedItem([...checkedItem, id]);
    } else {
      setCheckedItem(checkedItem.filter((item) => item !== id));
    }
  };
  return (
    <CheckCartItemContext.Provider
      value={{ checkedItem, setCheckedItem, handleCheckItem }}
    >
      {children}
    </CheckCartItemContext.Provider>
  );
}

export function useCheckCartItemContext() {
  return useContext(CheckCartItemContext);
}
