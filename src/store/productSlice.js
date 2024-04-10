import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice ({
    name: 'products',
    initialState: {
        products: [],
    },
    reducers:{
        addProduct(state, action) {
            state.products.push({
                id: new Date().toISOString(),
                namePr: action.payload.namePr,
                price:  action.payload.price,
            })
        },
        delProduct(state, action) {
            state.products = state.products.filter(product => product.id !== action.payload.id);
        },
        editProduct(state, action){}
    }
})

export const {addProduct, delProduct, editProduct} = productSlice.actions;

export default productSlice.reducer;