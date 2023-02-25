import { Outlet } from "react-router-dom";
import HeaderNav from "./components/header/HeaderNav";
import cartReducer, { initialState } from "./reducer/cart-reducer";
import {
  CartContextProvider,
  CheckCartItemContextProvider,
} from "./context/CartContext";
import HomePage from "./pages/Home";

function App() {
  return (
    <CartContextProvider initialState={initialState} cartReducer={cartReducer}>
      <CheckCartItemContextProvider>
        <HeaderNav />
        <Outlet>
          <main>
            <HomePage />
          </main>
        </Outlet>
      </CheckCartItemContextProvider>
    </CartContextProvider>
  );
}

export default App;
