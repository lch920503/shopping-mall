import styled from "styled-components";
import CartTotalAmount from "./CartTotalAmount";
import CartHeader from "./CartHeader";
import CartList from "./CartList";
import {
  useCartContext,
  useCheckCartItemContext,
} from "../../context/CartContext";
import { useState } from "react";

const CartContainer = styled.main`
  padding: 120px 50px;

  @media screen and (max-width: 768px) {
    padding: 120px 30px;
  }
`;

export default function Cart() {
  const [totalAmount, setTotalAmount] = useState(0);

  const [{ cart }] = useCartContext();

  const { checkedItem, setCheckedItem } = useCheckCartItemContext();

  const handleAllCheck = (checked) => {
    if (checked) {
      const checkedItems = [];
      cart.map((item) => checkedItems.push(item.id));
      setCheckedItem(checkedItems);
    } else {
      setCheckedItem([]);
    }
  };

  const isAllChecked =
    cart.length === checkedItem.length && checkedItem.length !== 0;

  return (
    <CartContainer>
      <CartHeader handleAllCheck={handleAllCheck} isAllChecked={isAllChecked} />
      <CartList />
      <CartTotalAmount
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
      />
    </CartContainer>
  );
}
