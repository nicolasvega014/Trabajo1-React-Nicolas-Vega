import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
        const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
                setLoading(true);
                getProductById(itemId)
                    .then((res) => {
                        setProduct(res);
                    })
                    .finally(() => setLoading(false));
    }, [itemId]);

        if (loading) {
                return <p style={{ padding: "2rem" }}>Cargando...</p>;
        }

        if (!product) {
            return <p style={{ padding: "2rem" }}>Producto no encontrado</p>;
        }

    return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
