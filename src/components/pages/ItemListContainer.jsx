import ProductCard from "../common/ProductCard"



const ItemListContainer = ({greeting}) => {
  return (
    <>
      <div>
        <h1 style={{color: "blue", textAlign: "center"}}>{greeting}</h1>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
          <ProductCard titulo={"reloj 1"} desc={"gama media"} precio={15000}/>
          <ProductCard titulo={"reloj 2"} desc={"gama alta"} precio={25000}/>
          <ProductCard titulo={"auriculares 1"} desc={"gama baja"} precio={10000}/>
          <ProductCard titulo={"auriculares 2"} desc={"gama media"} precio={15000}/>
        </div>
      </div>
    </>
  )
  
}

export default ItemListContainer