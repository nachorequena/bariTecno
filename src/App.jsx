import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "../src/context/cartContext";
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
