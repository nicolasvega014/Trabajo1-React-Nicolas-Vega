import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const itemExists = cart.find((prod) => prod.id === item.id);

    // Validate stock before adding
    if (itemExists) {
      const newQuantity = itemExists.quantity + quantity;
      if (newQuantity > item.stock) {
        return false; // cannot add beyond stock
      }
      const updatedCart = cart.map((prod) =>
        prod.id === item.id ? { ...prod, quantity: newQuantity } : prod
      );
      setCart(updatedCart);
      return true;
    } else {
      if (quantity > item.stock) {
        return false;
      }
      setCart([...cart, { ...item, quantity }]);
      return true;
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const totalQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        totalQuantity,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};