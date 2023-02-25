import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import * as S from "./ProductList.styles";

export default function ProductList() {
  const [productItems, setProductsItems] = useState([]);

  useEffect(() => {
    axios
      .get("/data/products.json")
      .then((res) => setProductsItems(res.data.products));
  }, []);

  const sortProduct = (type) => {
    const newProducts = [...productItems];
    if (type === "recent") {
      newProducts.sort((a, b) => a.id - b.id);
      setProductsItems(newProducts);
    } else if (type === "row") {
      newProducts.sort((a, b) => a.price - b.price);
      setProductsItems(newProducts);
    } else if (type === "high") {
      newProducts.sort((a, b) => b.price - a.price);
      setProductsItems(newProducts);
    }
  };

  return (
    <S.ProductListContainer>
      <S.FillerWrapper>
        <S.FillterText onClick={() => sortProduct("recent")}>
          최신순
        </S.FillterText>
        <S.FillterText onClick={() => sortProduct("row")}>
          낮은가격
        </S.FillterText>
        <S.FillterText onClick={() => sortProduct("high")}>
          높은가격
        </S.FillterText>
      </S.FillerWrapper>
      <S.FlexWrapper>
        {productItems.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </S.FlexWrapper>
    </S.ProductListContainer>
  );
}
