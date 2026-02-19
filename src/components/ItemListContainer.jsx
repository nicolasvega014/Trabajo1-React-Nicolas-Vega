import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../services/productService";


function ItemListContainer({ mensaje }) {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getProducts(categoryId).then(res => setProducts(res));
    }, [categoryId]);

    return (
        <div style={{ padding: "2rem" }}>
        {mensaje && <h2>{mensaje}</h2>}
        <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
