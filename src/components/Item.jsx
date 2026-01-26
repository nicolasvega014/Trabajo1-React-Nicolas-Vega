import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Item({ product }) {
    return (
        <Card style={{ width: "18rem" }} className="mb-4">
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
            Precio: ${product.price}
            </Card.Text>

            <Link to={`/item/${product.id}`}>
            <Button variant="primary">Ver detalle</Button>
            </Link>
        </Card.Body>
        </Card>
    );
}

export default Item;