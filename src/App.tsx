import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";
import "./styles/global.css";

export function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
