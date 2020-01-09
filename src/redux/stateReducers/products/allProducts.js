import { GET_ALL_PRODUCTS } from "../../actionTypes"

initialState = {
    product: null,
    loading: false,
    error: false
}

export const getAllProducts = (state = initialState, action) => {
    switch (action.type){
        case GET_ALL_PRODUCTS.START:
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_ALL_PRODUCTS.SUCCESS:  
            return {
                ...state,
                loading: false,
                product: action.payload,
            }
        case GET_ALL_PRODUCTS.FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
            default: return state;
    }
}

