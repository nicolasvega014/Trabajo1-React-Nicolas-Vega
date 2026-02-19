import { useState } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { products } from "../asyncMock/data";

function SeedProducts() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const seed = async () => {
    setStatus("checking");
    try {
      const colRef = collection(db, "products");
      const snapshot = await getDocs(colRef);
      if (!snapshot.empty) {
        setStatus("exists");
        setMessage("La colección 'products' ya contiene documentos.");
        return;
      }

      setStatus("seeding");
      for (const p of products) {
        const docRef = doc(db, "products", p.id);
        await setDoc(docRef, p);
      }

      setStatus("done");
      setMessage("Productos sembrados correctamente.");
    } catch (err) {
      setStatus("error");
      setMessage(String(err));
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Seed Products (dev only)</h2>
      <p>Estado: {status}</p>
      {message && <p>{message}</p>}
      <button onClick={seed}>Sembrar productos en Firestore</button>
    </div>
  );
}

export default SeedProducts;
