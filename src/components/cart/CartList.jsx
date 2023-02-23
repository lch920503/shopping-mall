import { useCartContext } from "../../context/CartContext";
import * as S from "./CartList.styles";
import CartItem from "./CartItem";

export default function CartList() {
  const [{ cart }, dispatch] = useCartContext();

  const handleAddCart = (cart) => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        ...cart,
        quantity: 1,
      },
    });
  };

  const handleRemoveCart = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      item: {
        id,
      },
    });
  };

  const handleDeleteCart = (id) => {
    dispatch({
      type: "DELETE_ITEM",
      item: {
        id,
      },
    });
  };

  return (
    <>
      {cart.length !== 0 && (
        <S.CartItemList>
          {cart.map((item, index) => (
            <CartItem
              key={cart[index].id}
              item={item}
              handleRemoveCart={handleRemoveCart.bind(null, cart[index].id)}
              handleAddCart={handleAddCart.bind(null, item)}
              handleDeleteCart={handleDeleteCart.bind(null, cart[index].id)}
            />
          ))}
        </S.CartItemList>
      )}
      {cart.length === 0 && (
        <S.EmptyCartBox>
          <S.EmptyCartText>장바구니에 담긴 상품이 없습니다.</S.EmptyCartText>
        </S.EmptyCartBox>
      )}
    </>
  );
}
