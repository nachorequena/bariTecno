import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { CartContainer } from "./components/pages/cart/cartContainer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { Layout } from "./components/layout/Layout";
import CartContextProvider from "../src/context/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />

            <Route
              path="*"
              element={
                <img
                  src="https://res.cloudinary.com/dq5eikj1o/image/upload/v1709237390/eror-404_jsdibd.jpg"
                  alt=""
                />
              }
            />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
