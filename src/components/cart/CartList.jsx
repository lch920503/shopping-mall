import { useCartContext } from "../../context/CartContext";
import * as S from "./CartList.styles";
import CartItem from "./CartItem";

export default function CartList() {
  const [{ cart }] = useCartContext();

  return (
    <S.CartItemList>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </S.CartItemList>
  );
}
