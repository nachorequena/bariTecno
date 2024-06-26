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
          <h1>{item.title}</h1>
          <h2>${item.price}</h2>
          <h3>{item.description}</h3>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <ItemCountContainer
            stock={item.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </div>
        {initial && <h4>cantidad de unidades en el carrito: {initial} </h4>}
      </div>
    </div>
  );
};
