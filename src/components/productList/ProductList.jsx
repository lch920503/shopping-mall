import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "../productItem/ProductItem";
import * as S from "./ProductList.styles";

const filterItem = ["최신순", "낮은가격", "높은가격"];

export default function ProductList() {
  const [productItems, setProductsItems] = useState([]);

  useEffect(() => {
    axios
      .get("/data/products.json")
      .then((res) => setProductsItems(res.data.products));
  });

  return (
    <S.ProductListContainer>
      <S.FillerWrapper>
        {filterItem.map((item, index) => (
          <S.FillterText key={index}>{item}</S.FillterText>
        ))}
      </S.FillerWrapper>
      <S.FlexWrapper>
        {productItems.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </S.FlexWrapper>
    </S.ProductListContainer>
  );
}
