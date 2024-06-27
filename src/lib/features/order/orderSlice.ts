import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface orderState {
  value: Array<String>
}

// Define the initial state using that type
const initialState: orderState = {
  value: []
}

export const orderSlice = createSlice({
  name: 'order',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addtocart: (state,action: PayloadAction<string>) => {
      state.value.push(action.payload)
    },
  
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { addtocart } = orderSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.sidevisiblity.value

export default orderSlice.reducer