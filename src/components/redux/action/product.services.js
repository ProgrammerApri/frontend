export const getProducts = (keyword = null) => {
    return function (dispatch) {
        return fetch(`https://dummyjson.com/products/search?q=${keyword}`)
            .then((response) => response.json())
            .then((data) => {
                const products = data.products.map((d) => {
                    return {
                        id: d.id,
                        title: d.title,
                        desc: d.description,
                        price: d.price,
                        img: d.thumbnail
                    };
                });

                dispatch({
                    type: "GET-PRODUCTS",
                    payload: products
                });
            });
    }
}

export const getProduct = ({ id }) => {
    return function (dispatch) {
        return fetch(`https://dummyjson.com/products/${id}`)
            .then(response => response.json())
            .then((data) => {
                const product = {
                    id: data.id,
                    title: data.title,
                    desc: data.description,
                    price: data.price,
                    img: data.thumbnail
                }

                dispatch({
                    type: "GET-PRODUCT",
                    payload: product
                });
            });
    }
}