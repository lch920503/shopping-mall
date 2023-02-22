import { Outlet } from "react-router-dom";
import HeaderNav from "./components/header/HeaderNav";
import cartReducer, { initialState } from "./reducer/cart-reducer";
import { CartContextProvider } from "./context/CartContext";
import HomePage from "./pages/Home";

function App() {
  return (
    <CartContextProvider initialState={initialState} cartReducer={cartReducer}>
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
