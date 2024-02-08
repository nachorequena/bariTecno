

const ProductCard = ({titulo, desc, precio}) => {
  return (
    <div style={{textAlign:"center"}}>
        <h3>{titulo}</h3>
        <h4>{desc}</h4>
        <h4>{precio}</h4>
    </div>
  )
}

export default ProductCard