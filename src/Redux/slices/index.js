import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./users";
import counterSlice from "./counter";

const reducers = combineReducers({
  user: userSlice,
  counter: counterSlice,
});

export default reducers;
