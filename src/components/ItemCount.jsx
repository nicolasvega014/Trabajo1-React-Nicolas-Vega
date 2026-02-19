import { useState } from "react";
import { Button } from "react-bootstrap";

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Button variant="secondary" onClick={decrement}>
          -
        </Button>

        <span>{count}</span>

        <Button variant="secondary" onClick={increment}>
          +
        </Button>
      </div>

      <Button
        variant="success"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount;

