import { configureStore } from "@reduxjs/toolkit";
import gameReducer from '../features/gameSlice';
import tempReducer from '../features/tempSlice';
import playerReducer from "../features/playerSlice";

export default configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false,}),
    reducer:{
        game: gameReducer,
        temp: tempReducer,
        player:playerReducer,
    }
})