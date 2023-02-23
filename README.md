## 구현사항

[✔] 장바구니에 상품 추가  
[✔] 장바구니 상품 삭제  
[✔] 장바구니에서 상품의 수량 변경  
[✔] 전체선택, 전체선택 해제  
[ ] 선택된 상품에 따라 총 결제 금액 변경  
[✔] 필터 (최신순, 낮은가격, 높은가격)  
[✔] axios를 이용해 데이터 fetcing.

## 어려웠던 점

- 장바구니 기능 구현을 위해 Context API와 reducer를 연결하는 부분.
- 장바구니에 중복 아이템을 체크하여 수량만 변경하는 reducer 로직.
- 장바구니에 해당 아이템의 id 값 가져오는 방법.

## 해결 방법

Youtube와 Udemy 강의를 병행하여 반복 시청 및 코드 정리 후 구현 완료.

## 주요 코드

- cart-reducer.js

```javascript
export const initialState = {
  cart: [],
};

export default function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === parseInt(action.item.id)
      );
      const hasItem = state.cart[itemIndex];
      let updatedItems;
      if (hasItem) {
        const updatedItem = {
          ...hasItem,
          quantity: hasItem.quantity + action.item.quantity,
        };
        updatedItems = [...state.cart];
        updatedItems[itemIndex] = updatedItem;
      } else {
        updatedItems = state.cart.concat(action.item);
      }
      return {
        ...state,
        cart: updatedItems,
      };
    }
    case "REMOVE_ITEM": {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === parseInt(action.item.id)
      );
      const hasItem = state.cart[itemIndex];
      let updatedItems;
      if (hasItem.quantity === 1) {
        updatedItems = state.cart.filter(
          (item) => item.id !== parseInt(action.item.id)
        );
      } else {
        const updatedItem = {
          ...hasItem,
          quantity: hasItem.quantity - 1,
        };
        updatedItems = [...state.cart];
        updatedItems[itemIndex] = updatedItem;
      }
      return {
        ...state,
        cart: updatedItems,
      };
    }
    case "DELETE_ITEM": {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === parseInt(action.item.id)
      );
      const hasItem = state.cart[itemIndex];
      let updatedItems;
      if (hasItem) {
        updatedItems = state.cart.filter(
          (item) => item.id !== parseInt(action.item.id)
        );
      }
      return {
        ...state,
        cart: updatedItems,
      };
    }
    default: {
      return state;
    }
  }
}
```

- App.js

```javascript
function App() {
  return (
    <CartContextProvider initialState={initialState} cartReducer={cartReducer}>
      <HeaderNav />
      <Outlet>
        <main>
          <HomePage />
        </main>
      </Outlet>
    </CartContextProvider>
  );
}

export default App;
```

- CartContext.jsx

```javascript
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export function CartContextProvider({ cartReducer, initialState, children }) {
  return (
    <CartContext.Provider value={useReducer(cartReducer, initialState)}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
```

- ProductDetail.jsx

```javascript
const [{ cart }, dispatch] = useCartContext();

const handleAddCart = () => {
  dispatch({
    type: "ADD_TO_CART",
    item: {
      ...product,
      quantity: count,
    },
  });

  // reducer, context API 사용 전 아이템 추가하는 코드
  // const cartItem = {
  //   ...product,
  //   quantity: count,
  // };
  // setCart([...cart, cartItem]);
};
```

- CartList.jsx

```javascript
import { useCartContext } from "../../context/CartContext";
import * as S from "./CartList.styles";
import CartItem from "./CartItem";

export default function CartList() {
  const [{ cart }, dispatch] = useCartContext();

  const handleAddCart = (cart) => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        ...cart,
        quantity: 1,
      },
    });
  };

  const handleRemoveCart = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      item: {
        id,
      },
    });
  };

  const handleDeleteCart = (id) => {
    dispatch({
      type: "DELETE_ITEM",
      item: {
        id,
      },
    });
  };

  return (
    <>
      {cart.length !== 0 && (
        <S.CartItemList>
          {cart.map((item, index) => (
            <CartItem
              key={cart[index].id}
              item={item}
              handleRemoveCart={handleRemoveCart.bind(null, cart[index].id)}
              handleAddCart={handleAddCart.bind(null, item)}
              handleDeleteCart={handleDeleteCart.bind(null, cart[index].id)}
            />
          ))}
        </S.CartItemList>
      )}
      {cart.length === 0 && (
        <S.EmptyCartBox>
          <S.EmptyCartText>장바구니에 담긴 상품이 없습니다.</S.EmptyCartText>
        </S.EmptyCartBox>
      )}
    </>
  );
}
```

## 회고

Reducer와 Context API를 연결하는 방법 및 state와 dispatch 구현 로직 => 반복 이해 필요.  
장바구니에 중복 아이템을 체크하여 수량만 변경하는 reducer 로직 => 반복 이해 필요.
