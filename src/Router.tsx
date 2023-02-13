import { Home } from "./pages/Home/index";
import { Route, Routes } from "react-router-dom";
import { Autenticacao } from "./pages/Autenticacao";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function AppRouter() {
  return (
    <Routes>
      {/* <Route path="/" element={<DefaultLayout />}> */}
      {/* <Route path="/" element={<Autenticacao />}> */}
      <Route path="/" element={<Home />} />
      {/* </Route> */}
      {/* </Route> */}
    </Routes>
  );
}
