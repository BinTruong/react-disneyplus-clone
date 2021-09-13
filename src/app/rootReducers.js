import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducer import
import userSlice from "../features/user/userSlice";
import movieSlice from "../features/movie/movieSlice";

const rootReducer = combineReducers({
  user: userSlice,
  movie: movieSlice,
});
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"],
};

export default persistReducer(persistConfig, rootReducer);
