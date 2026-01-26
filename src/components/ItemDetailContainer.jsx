import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../asyncMock/data";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId).then((res) => {
        setProduct(res);
        });
    }, [itemId]);

    if (!product) {
        return <p style={{ padding: "2rem" }}>Cargando...</p>;
    }

    return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
