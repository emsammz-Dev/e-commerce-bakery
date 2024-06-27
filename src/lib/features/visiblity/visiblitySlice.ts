import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface sidevisiblityState {
  value: string
}

// Define the initial state using that type
const initialState: sidevisiblityState = {
  value: "invisible",
}

export const sidevisiblitySlice = createSlice({
  name: 'sidevisiblity',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    invisible: (state) => {
      state.value = "invisible"
    },
    visible: (state) => {
      state.value ="visible"
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { invisible, visible } = sidevisiblitySlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.sidevisiblity.value

export default sidevisiblitySlice.reducer