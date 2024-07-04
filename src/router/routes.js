import Auth from "../components/pages/Auth";
import { CartContainer } from "../components/pages/cart/cartContainer";
import { ItemDetailContainer } from "../components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer";
import ProductEdit from "../components/pages/productEdit";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:category",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/item/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "auth",
    path: "/auth",
    Element: Auth,
  },
  {
    id: "productEdit",
    path: "/productEdit",
    Element: ProductEdit,
  },
];
