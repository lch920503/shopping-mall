import * as S from "./EventBanner.styles";

export default function EventBanner() {
  return (
    <S.Banner>
      <S.ArrowRight>
        <S.RightImage src="images/icon-swiper-2.svg" alt="right" />
      </S.ArrowRight>
      <S.ArrowLeft>
        <S.LeftImage src="images/icon-swiper-1.svg" alt="left" />
      </S.ArrowLeft>
    </S.Banner>
  );
}
