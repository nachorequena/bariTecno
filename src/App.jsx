import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import { AppRouter } from "./router/appRouter";
const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <AppRouter />
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
