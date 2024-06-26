import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import WhatsappButton from "../common/WhatsappButton";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <WhatsappButton />
      <Footer />
    </>
  );
};
