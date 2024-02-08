
import CartWidget from "../common/CartWidget";





const Navbar = ()=>{
    return <div style={{display:"flex", justifyContent: "space-around", alignItems:"center"}}>
        <img src="https://res.cloudinary.com/dq5eikj1o/image/upload/v1707352525/149555709-dise_C3_B1o-de-vectores-de-comercio-electr_C3_B3nico-de-plantilla-de-logotipo-de-carro-de-tecnolog_C3_ADa-vector_mverjx.jpg" alt="" style={{maxWidth:"150px"}}/>
        <ul style={{listStyleType:"none", display:"flex", justifyContent:"space-around"}}>
            <li style={{cursor:"pointer", margin: "1rem"}}>todos</li>
            <li style={{cursor:"pointer", margin: "1rem"}}>relojes</li>
            <li style={{cursor:"pointer", margin: "1rem"}}>auriculares</li>
        </ul>
        <CartWidget />
        
    </div>
}

export default Navbar