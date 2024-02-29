export let products = [
  {
    id: 1,
    title: "reloj inteligente smartwatch l8",
    price: 12432,
    description: "color negro",
    img: "https://res.cloudinary.com/dq5eikj1o/image/upload/v1709164621/acc_aylgfw.jpg",
    stock: 12,
    category: "relojes",
  },
  {
    id: 2,
    title: "reloj inteligente smart band",
    price: 14500,
    stock: 5,
    description: "color azul",
    category: "relojes",
    img: "https://res.cloudinary.com/dq5eikj1o/image/upload/v1709168591/D_NQ_NP_961555-MLA53433161579_012023-O_mbakjt.webp",
  },
  {
    id: 3,
    title: "auriculares inalambricos xiaomi redmi airdots",
    price: 19000,
    stock: 5,
    description: "color negro",
    category: "auriculares",
    img: "https://res.cloudinary.com/dq5eikj1o/image/upload/v1709170067/airdots.xiaomi.1_dlzryz.jpg",
  },
  {
    id: 4,
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
      reject("no hay productos");
    }
  });
};
