const products = [
  {
    id: "1",
    title: "Remera Nike",
    price: 15000,
    category: "remeras",
    description: "Remera deportiva Nike",
    stock: 10
  },
  {
    id: "2",
    title: "Zapatillas Adidas",
    price: 45000,
    category: "zapatillas",
    description: "Zapatillas running Adidas",
    stock: 5
  },
  {
    id: "3",
    title: "Remera Puma",
    price: 14000,
    category: "remeras",
    description: "Remera Puma algodón",
    stock: 8
  },
  {
    id: "4",
    title: "Campera Adidas",
    price: 60000,
    category: "camperas",
    description: "Campera deportiva Adidas",
    stock: 4
  },
  {
    id: "5",
    title: "Campera Nike",
    price: 58000,
    category: "camperas",
    description: "Campera térmica Nike",
    stock: 6
  }
];

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(products.filter(prod => prod.category === categoryId));
      } else {
        resolve(products);
      }
    }, 500); // Simula un delay de 500ms
  });
};
