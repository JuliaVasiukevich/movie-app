import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import moviesReducer from "./features/moviesSlice";
import userReducer from "./features/userSlice";
import movieDetailsReducer from "./features/moviesDetailsSlice";
import favoritesReducer from "./features/favoritesSlice"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites", "user"],
};

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  movieDetails: movieDetailsReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;