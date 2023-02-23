import styled from "styled-components";
import CartTotalAmount from "./CartTotalAmount";
import CartHeader from "./CartHeader";
import CartList from "./CartList";

const CartContainer = styled.main`
  padding: 120px 50px;

  @media screen and (max-width: 768px) {
    padding: 120px 30px;
  }
`;

export default function Cart() {
  return (
    <CartContainer>
      <CartHeader />
      <CartList />
      <CartTotalAmount />
    </CartContainer>
  );
}
