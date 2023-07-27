// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

//          
import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
const store = configureStore({
    reducer :{
             cart:cartReducer,
    },
})

export default store;