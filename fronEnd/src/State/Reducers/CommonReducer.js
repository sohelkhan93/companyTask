export const CommonReducer = (
  state = {  products: [] },
  action
) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.data,
      };
      break;
  }
  return state;
};
