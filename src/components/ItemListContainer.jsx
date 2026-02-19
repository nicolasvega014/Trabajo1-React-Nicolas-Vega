import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../services/productService";


function ItemListContainer({ mensaje }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts(categoryId)
          .then((res) => setProducts(res))
          .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <div style={{ padding: "2rem" }}>
        {mensaje && <h2>{mensaje}</h2>}
        {loading ? <p>Cargando productos...</p> : <ItemList products={products} />}
        </div>
    );
}

export default ItemListContainer;
