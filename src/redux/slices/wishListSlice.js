import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice= createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state,dataFromeView)=>{
            state.push(dataFromeView.payload)
        },
        removieWishlistItem :(state,dataFromeWishlist)=>{
            return state.filter(item=>item.id!=dataFromeWishlist.payload)
        }
    }
})

export const {addToWishlist,removieWishlistItem}=wishlistSlice.actions
export default wishlistSlice.reducer