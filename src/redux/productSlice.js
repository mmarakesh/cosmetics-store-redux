import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    selectedCategory: 'all'
  },
  reducers: {
    filterCategory: (state, action) => {
    state.selectedCategory = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const getSelectedCategory = state => state.products.selectedCategory;
export const { filterCategory } = productSlice.actions;
export default productSlice.reducer;