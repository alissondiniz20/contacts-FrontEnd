import { Header } from "./components/Header";
import { Contato } from "./components/Contato";
import { NewContact } from "./components/NewContact";
import { Login } from "./components/Login";

import "./App.css";

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Login />
      </main>
    </div>
  );
}
