import { useEffect, useState } from "react";
import { getProducts } from "../../../ProductsMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id);

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts(+id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    console.log(infoProducto);
  };

  return (
    <>
      {isLoading ? (
        <h2>Cargando producto...</h2>
      ) : (
        <ItemDetail item={item} onAdd={onAdd} />
      )}
    </>
  );
};
