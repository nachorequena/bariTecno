import { Route, Routes } from "react-router-dom";

import { Layout } from "../components/layout/Layout";

import { routes } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route
        path="*"
        element={
          <img
            src="https://res.cloudinary.com/dq5eikj1o/image/upload/v1709237390/eror-404_jsdibd.jpg"
            alt=""
          />
        }
      />
    </Routes>
  );
};
