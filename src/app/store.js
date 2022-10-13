import { configureStore } from "@reduxjs/toolkit";

import gameReducer from '../features/gameSlice';

export default configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false,}),
    reducer:{
        game: gameReducer,
    }
})