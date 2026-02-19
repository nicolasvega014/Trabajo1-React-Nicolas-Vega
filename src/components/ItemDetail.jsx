import { Card, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");
  const { addItem } = useContext(CartContext);

  const handleAdd = (quantity) => {
    const ok = addItem(product, quantity);
    if (ok) {
      setAdded(true);
      setError("");
    } else {
      setError("No hay stock suficiente para esa cantidad");
    }
  };

  return (
    <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>
            <strong>Precio:</strong> ${product.price}
          </Card.Text>

          {!added ? (
            <ItemCount
              stock={product.stock}
              initial={1}
              onAdd={handleAdd}
            />
          ) : (
            <Link to="/cart">
              <Button variant="primary" className="mt-3">
                Ir al carrito
              </Button>
            </Link>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
