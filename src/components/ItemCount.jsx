import { useState } from "react";
import { Button } from "react-bootstrap";

function ItemCount() {
    const [count, setCount] = useState(1);

    return (
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Button
            variant="secondary"
            onClick={() => setCount(count - 1)}
            disabled={count <= 1}
        >
            -
        </Button>
        <span>{count}</span>
        <Button
            variant="secondary"
            onClick={() => setCount(count + 1)}
        >
            +
        </Button>
        </div>
    );
}



export default ItemCount;
