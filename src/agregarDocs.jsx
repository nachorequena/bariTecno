import { addDoc, collection } from "firebase/firestore";
import { dataBase } from "./firebaseConfig";
import { products } from "./ProductsMock";
const AgregarDocs = () => {
  const rellenar = () => {
    let productsCollection = collection(dataBase, "products");
    products.forEach((product) => {
      addDoc(productsCollection, product);
    });
  };

  return <button onClick={rellenar}>agregar doc</button>;
};

export default AgregarDocs;
