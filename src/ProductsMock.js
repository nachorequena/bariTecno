export let products = [
  {
    title: "reloj inteligente smart band",
    price: 14500,
    stock: 5,
    description: "color azul",
    category: "relojes",
    img: "https://res.cloudinary.com/dq5eikj1o/image/upload/v1709168591/D_NQ_NP_961555-MLA53433161579_012023-O_mbakjt.webp",
  },

  {
    title: "AirPods apple",
    price: 17800,
    stock: 5,
    description: "color blanco",
    category: "auriculares",
    img: "https://res.cloudinary.com/dq5eikj1o/image/upload/v1709170097/1-30_rbzvaw.png",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};
