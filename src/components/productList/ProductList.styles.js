import styled from "styled-components";

export const ProductListContainer = styled.div`
  width: 100%;
  padding: 120px 50px;

  @media screen and (max-width: 768px) {
    padding: 120px 30px;
  }
`;

export const FillerWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: flex-end;
`;

export const FillterText = styled.p`
  cursor: pointer;

  &:not(:last-child)::after {
    content: "|";
    padding: 10px;
  }

  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
`;

export const FlexWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 0 auto;
  margin-top: 35px;

  a {
    display: block;
    width: calc(33.3333% - 20px);

    @media screen and (max-width: 1024px) {
      width: calc(50% - 15px);
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;
