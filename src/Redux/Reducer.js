export const initialState = {
  basket: [],
  totalCount: 0,
  totalPrice: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const updatedBasket = [...state.basket, action.item];
      const updatedTotalPrice = updatedBasket.reduce(
        (total, item) => total + Number(item.price), // Parse price as a number
        0
      );
      return {
        ...state,
        basket: updatedBasket,
        totalCount: state.totalCount + 1,
        totalPrice: updatedTotalPrice,
      };

    case "REMOVE_FROM_BASKET":
      const filteredBasket = state.basket.filter((item) => item.id !== action.id);
      const updatedPrice = filteredBasket.reduce(
        (total, item) => total + Number(item.price), // Parse price as a number
        0
      );
      return {
        ...state,
        basket: filteredBasket,
        totalCount: state.totalCount - 1,
        totalPrice: updatedPrice,
      };

    default:
      return state;
  }
}

export default reducer;
