import { ProductCard } from "../../common/ProductCard";
import "./ItemListContainer.css";

const ItemList = ({ products }) => {
  return (
    <div className="main-container">
      <div className="title-container">
        <h1>Nuestros productos</h1>
      </div>
      <div className="cards-container">
        {products.map(({ id, img, title, description, price }) => {
          return (
            <ProductCard
              key={id}
              img={img[0]}
              title={title}
              description={description}
              price={price}
              id={id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
