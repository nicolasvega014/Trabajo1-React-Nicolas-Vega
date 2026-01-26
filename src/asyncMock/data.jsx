const products = [
    {
        id: "1",
        title: "Remera Nike",
        price: 15000,
        category: "remeras",
        description: "Remera deportiva Nike"
    },
    {
        id: "2",
        title: "Zapatillas Adidas",
        price: 45000,
        category: "zapatillas",
        description: "Zapatillas running Adidas"
    },
    {
        id: "3",
        title: "Remera Puma",
        price: 14000,
        category: "remeras",
        description: "Remera Puma algodón"
    },
    {
        id: "4",
        title: "Campera Adidas",
        price: 60000,
        category: "camperas",
        description: "Campera deportiva Adidas"
    },
    {
        id: "5",
        title: "Campera Nike",
        price: 58000,
        category: "camperas",
        description: "Campera térmica Nike"
    }
    ];

    export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        if (categoryId) {
            resolve(products.filter(product => product.category === categoryId));
        } else {
            resolve(products);
        }
        }, 800);
    });
    };

    export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products.find(product => product.id === id));
        }, 800);
    });
    };
