import { Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
    return (
        <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "22rem" }}>
            <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>
                <strong>Precio:</strong> ${product.price}
            </Card.Text>

            <ItemCount />

            <Button variant="success" className="mt-3" disabled>
                Agregar al carrito
            </Button>
            </Card.Body>
        </Card>
        </div>
    );
}

export default ItemDetail;
