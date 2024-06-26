import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";
import { dataBase } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import PulseLoader from "react-spinners/PulseLoader";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const initial = getTotalQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(dataBase, "products");
    let refDoc = doc(productsCollection, id);

    getDoc(refDoc)
      .then((res) => {
        setItem({ ...res.data(), id: res.id });
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PulseLoader color="#36d7b7" />
        </div>
      ) : (
        <ItemDetail item={item} onAdd={onAdd} initial={initial} />
      )}
    </>
  );
};
