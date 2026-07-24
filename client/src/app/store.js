import{configureStore} from '@reduxjs/toolkit' // store is created using configureStore function from toolkit.
import authReducer from './features/authSlice'


export const store = configureStore({
    reducer: {
        auth: authReducer  //registered reducer with the store. Now the store knows about the functions in slice and can call them when needed.
    }
})