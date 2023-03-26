import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  userInfo: null,
}

export const amazonSlice = createSlice({
  name: 'amazon',
  initialState,
  reducers: {
    
    addToCart: (state, action) => {
        const item = state.products.find((item)=> item.id === action.payload.id)
        if(item){
            item.quantity += action.payload.quantity;
        }else(
            state.products.push(action.payload)
        )
        
    },
    incQuantity:(state,action)=>{
      const item = state.products.find((item)=>item.id === action.payload)
      item.quantity++
    },
    decQuantity:(state,action)=>{
      const item = state.products.find((item)=>item.id === action.payload)
      if(item.quantity === 1){
        item.quantity = 1
      }else(
        item.quantity--
      )
    },
    deleteItem:(state,action)=>{
      state.products = state.products.filter((item)=>item.id!==action.payload)
    },
    clearCart:(state)=>{
      state.products = []
    },
    setUserInfo:(state,action)=>{
      state.userInfo = action.payload
    },
    userSignOut:(state)=>{
      state.userInfo = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, deleteItem, clearCart, incQuantity, decQuantity, setUserInfo, userSignOut } = amazonSlice.actions

export default amazonSlice.reducer