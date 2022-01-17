import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/Users"

export default configureStore({
    reducer :{
        user: userReducer,
    }
})