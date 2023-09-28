import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT

} from "../Constants/Actions-types";

  import {products} from '../../Data'

const initialState = {
  productList: products
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return { ...state, productList: [...state.productList, payload] };

    case EDIT_PRODUCT:
      return {
        ...state,
        productList: state.productList.map((el) =>
          el.id === payload.id ? { ...el, text: payload.newProduct } : el
        ),
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        productList: state.productList.filter((el) => el.id !== payload),
      };




    default:
      return state;
  }
};

export default productReducer;
