
import ItemListContainer from "./components/pages/ItemListContainer"
import Navbar from "./components/layout/Navbar"


function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="hola, bienvenidos a la tienda"/>
    </div>
  )
}

export default App
