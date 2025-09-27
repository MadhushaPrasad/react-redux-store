import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    fetchProducts:(state,action)=>{
      state.data = action.payload
    }
  },
})

export const {fetchProducts} = productSlice.actions
export default productSlice.reducer

export function getProducts() {
  async function getProductsThunk(dispatch, state) {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = data.json()
    dispatch(fetchProducts(result))
  }
}
