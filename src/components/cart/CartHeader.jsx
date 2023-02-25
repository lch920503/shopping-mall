import * as S from "./CartHeader.styles";

export default function CartHeader({ handleAllCheck, isAllChecked }) {
  return (
    <>
      <S.Header>
        <h1>장바구니</h1>
      </S.Header>
      <S.TopMenu>
        <S.InputWrapper>
          <S.TopMenuInput
            type="checkbox"
            onChange={(e) => handleAllCheck(e.currentTarget.checked)}
            checked={isAllChecked}
          />
        </S.InputWrapper>
        <S.TopMenuText>상품정보</S.TopMenuText>
        <S.TopMenuText>수량</S.TopMenuText>
        <S.TopMenuText>상품금액</S.TopMenuText>
      </S.TopMenu>
    </>
  );
}
