import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import { dataBase } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let productsCollection = collection(dataBase, "products");

    let consulta = productsCollection;

    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = productsCollectionFiltered;
    }

    getDocs(consulta)
      .then((res) => {
        let arrayDesencriptado = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });
        setProducts(arrayDesencriptado);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BounceLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
