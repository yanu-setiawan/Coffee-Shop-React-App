/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHistory } from "../../utils/https/transactions";

const initialState = {
  data: {},
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
  err: null,
};

export const getHistoryThunk = createAsyncThunk(
  "history/get",
  async ({ controller, token }, { rejectWithValue }) => {
    try {
      const result = await getHistory(controller, token);
      return result.data.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    filter: (prevState) => {
      return {
        ...prevState,
        data: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHistoryThunk.pending, (prevState) => {
        return {
          ...prevState,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
          err: null,
        };
      })
      .addCase(getHistoryThunk.fulfilled, (prevState, action) => {
        console.log("histtt", action.payload);
        return {
          ...prevState,
          isLoading: false,
          isFulfilled: true,
          data: action.payload,
        };
      })
      .addCase(getHistoryThunk.rejected, (prevState, action) => {
        return {
          ...prevState,
          isLoading: false,
          isRejected: true,
          err: action.error.message,
        };
      });
  },
});
export const historyAction = {
  ...historySlice.actions,
  getHistoryThunk,
};

export default historySlice.reducer;
