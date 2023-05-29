import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./users";
import counterSlice from "./cart";
import profileSlice from "./profile";
import historySlice from "./history";

const reducers = combineReducers({
  user: userSlice,
  counter: counterSlice,
  profile: profileSlice,
  history: historySlice,
});

export default reducers;
