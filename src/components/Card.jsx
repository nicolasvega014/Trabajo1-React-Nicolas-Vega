import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem, clear, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  return (
    <div>
      <h2>Carrito</h2>

      {cart.map(prod => (
        <div key={prod.id}>
          <h4>{prod.title}</h4>
          <p>Cantidad: {prod.quantity}</p>
          <p>Precio unitario: ${prod.price}</p>
          <p>Subtotal: ${prod.price * prod.quantity}</p>
          <button onClick={() => removeItem(prod.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <h3>Total: ${totalPrice()}</h3>
      <button onClick={clear}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;

