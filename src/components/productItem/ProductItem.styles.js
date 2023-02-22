import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.div`
  border-radius: 10px;
  margin-bottom: 16px;
  height: 330px;

  @media screen and (max-width: 768px) {
    height: 240px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
`;

export const Store = styled.div`
  margin-bottom: 10px;
`;

export const StoreText = styled.span`
  font-size: 16px;
  color: #767676;

  @media screen and (max-width: 360px) {
    font-size: 12px;
    color: #767676;
  }
`;

export const Product = styled.div`
  margin-bottom: 10px;
`;

export const ProductText = styled.span`
  font-size: 18px;
  color: #000;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
`;

export const Price = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

export const Unit = styled.span`
  font-size: 16px;
  color: #000000;
`;
