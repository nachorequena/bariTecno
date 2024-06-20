import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ItemDetail.css";

export const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <div>
      <div className="containerItemDetail">
        <div className="containerImage">
          <Carousel showArrows={true}>
            {item.img.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Producto ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="containerDetail">
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Nombre:</span> {item.title}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
            {item.description}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Precio:</span> ${item.price}.-
          </h2>
        </div>
      </div>

      {initial && <h3>ya tienes {initial} unidades en el carrito </h3>}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ItemCountContainer
          stock={item.stock}
          onAdd={onAdd}
          initial={initial}
        />
      </div>
    </div>
  );
};
