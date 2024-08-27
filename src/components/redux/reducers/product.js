const defaultState = {
    products: [],
    product: null,
    categories: []
};

const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET-PRODUCTS":
            return { ...state, products: action.payload };

        case "GET-PRODUCT":
            return { ...state, product: action.payload };

        case "GET-CATEGORY":
            return { ...state, categories: action.payload }
        default:
            return state;
    }
}

export default productReducer