import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
// Route de desarrollo para sembrar productos en Firestore
let SeedProducts;
if (import.meta.env && import.meta.env.DEV) {
  SeedProducts = (await import("./components/SeedProducts.jsx")).default;
}

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer mensaje="¡Bienvenidos a mi e-commerce!" />}
        />

        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />

        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/checkout"
          element={<CheckoutForm />}
        />

        {import.meta.env && import.meta.env.DEV && (
          <Route path="/seed" element={<SeedProducts />} />
        )}

        <Route
          path="*"
          element={<h2>Página no encontrada</h2>}
        />
      </Routes>
    </>
  );
}

export default App;
