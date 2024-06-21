import { addDoc, collection } from "firebase/firestore";
import { dataBase } from "./firebaseConfig";
import { products } from "./ProductsMock";

const AgregarDocs = () => {
  const rellenar = async () => {
    try {
      let productsCollection = collection(dataBase, "products");
      for (const product of products) {
        await addDoc(productsCollection, product);
      }
      alert("Productos agregados exitosamente!");
    } catch (error) {
      console.error("Error agregando documentos: ", error);
      alert("Hubo un error al agregar los productos.");
    }
  };

  return <button onClick={rellenar}>Agregar Docs</button>;
};

export default AgregarDocs;
