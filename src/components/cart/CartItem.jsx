import { useCheckCartItemContext } from "../../context/CartContext";
import * as S from "./CartItem.styles";

export default function CartItem({
  item,
  handleAddCart,
  handleRemoveCart,
  handleDeleteCart,
}) {
  const { handleCheckItem, checkedItem } = useCheckCartItemContext();

  return (
    <S.CartProductContainer>
      <S.InputWrapper>
        <S.CartProductInput
          type="checkbox"
          onChange={(e) => handleCheckItem(e.currentTarget.checked, item.id)}
          checked={checkedItem.includes(item.id) ? true : false}
        />
      </S.InputWrapper>
      <S.CartProductWrapper>
        <S.CartProductImageWrapper>
          <S.CartProductImage src={item.image} alt={item.name} />
        </S.CartProductImageWrapper>

        <S.CartProductInfoWrapper>
          <S.CartProductInfoSeller>{item.provider}</S.CartProductInfoSeller>
          <S.CartProductInfoProduct>{item.name}</S.CartProductInfoProduct>
          <S.CartProductInfoPrice>
            {item.price.toLocaleString()}원
          </S.CartProductInfoPrice>
          <S.CartProductInfoDelivery>
            택배배송 / 무료배송
          </S.CartProductInfoDelivery>
        </S.CartProductInfoWrapper>
      </S.CartProductWrapper>
      <S.CartProductCountWrapper>
        <S.CartProductCountBox>
          <S.MinusButton onClick={handleRemoveCart} />
          <S.CountNum>{item.quantity}</S.CountNum>
          <S.PlusButton onClick={handleAddCart} />
        </S.CartProductCountBox>
      </S.CartProductCountWrapper>
      <S.CartProductPriceWrapper>
        <S.SubmitButton>주문하기</S.SubmitButton>
      </S.CartProductPriceWrapper>
      <S.ProductRemoveWrapper>
        <button type="button" onClick={handleDeleteCart} />
      </S.ProductRemoveWrapper>
    </S.CartProductContainer>
  );
}
