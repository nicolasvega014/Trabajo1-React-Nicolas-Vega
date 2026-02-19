import { useState, useContext } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartContext } from "../context/CartContext";

function CheckoutForm() {
  const { cart, clear, totalPrice } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    if (cart.length === 0) return;

    setLoading(true);
    const order = {
      buyer: { name, email, phone },
      items: cart.map((p) => ({ id: p.id, title: p.title, price: p.price, quantity: p.quantity })),
      total: totalPrice(),
      createdAt: serverTimestamp(),
    };

    try {
      const ordersCol = collection(db, "orders");
      const docRef = await addDoc(ordersCol, order);
      setOrderId(docRef.id);
      clear();
    } catch (error) {
      setError("Ocurrió un error creando la orden. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Gracias por tu compra</h2>
        <p>Tu ID de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "400px" }}>
          <input placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
          <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button type="submit" disabled={loading}>{loading ? "Enviando..." : "Confirmar compra"}</button>
        </form>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default CheckoutForm;
