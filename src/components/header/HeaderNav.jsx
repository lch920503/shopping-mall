import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import * as S from "./HeaderNav.styles";

export default function HeaderNav() {
  const [{ cart }] = useCartContext();

  return (
    <S.Header>
      <S.InnerWrapper>
        <Link to="/">
          <S.Logo>
            <S.LogoImage src="/images/logo.png" alt="logo" />
          </S.Logo>
        </Link>
        <S.InputWrapper>
          <S.InputSearch type="text" placeholder="상품을 검색하세요." />
          <S.InputImage src="/images/icon-search.svg" alt="search" />
        </S.InputWrapper>
      </S.InnerWrapper>
      <S.MenuWrapper>
        <Link to="/cart">
          <S.CartWrapper>
            <S.CartImage src="/images/icon-shopping-cart.svg" alt="cart" />
            <S.CartText>장바구니</S.CartText>
            <S.CartItemNumber>{cart?.length}</S.CartItemNumber>
          </S.CartWrapper>
        </Link>
        <div>
          <S.MyPageWrapper>
            <S.MyPageImage src="/images/icon-user.svg" alt="user" />
            <S.MyPageText>로그인</S.MyPageText>
          </S.MyPageWrapper>
        </div>
      </S.MenuWrapper>
    </S.Header>
  );
}
