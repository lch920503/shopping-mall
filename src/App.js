import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderNav from "./components/header/HeaderNav";
import { CartContextProvider } from "./context/CartContext";
import HomePage from "./pages/Home";

function App() {
  return (
    <CartContextProvider>
      <HeaderNav />
      <Outlet>
        <main>
          <HomePage />
        </main>
      </Outlet>
    </CartContextProvider>
  );
}

export default App;
