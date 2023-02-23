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
