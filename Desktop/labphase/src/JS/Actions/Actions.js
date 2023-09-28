// redux

import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from "../Constants/Actions-types";

export const addproduct = newProduct => {
    return {
        type: ADD_PRODUCT,
        payload: newProduct
    }
}

export const editproduct = (id, newProduct) => {
        return {
            type: EDIT_PRODUCT,
            payload: {id, newProduct}
        }
}

export const delproduct = id => {
            return {
                type: DELETE_PRODUCT,
                payload: id
            }
}




