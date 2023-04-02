/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin, updateProfile } from "../../utils/https/auth";

const initialState = {
  data: {
    msg: "",
    id: 0,
    role_id: 0,
    image: "",
    token: "",
  },
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
  err: null,
};

//action
const doLogin = createAsyncThunk(
  "users/post",
  async ({ email, password }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userLogin(email, password);
      console.log(response.data);
      return fulfillWithValue(response.data);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const doUpdateProfile = createAsyncThunk(
  "updateProfile/patch",
  async ({ id, payload, controller, token }) => {
    try {
      const formData = new FormData();
      formData.append("first_name", payload.first_name);
      formData.append("last_name", payload.last_name);
      formData.append("display_name", payload.display_name);
      formData.append("birth_fate", payload.birth_date);
      formData.append("address", payload.address);
      formData.append("gender", payload.gender);
      formData.append("image", payload.image);
      formData.append("email", payload.email);
      formData.append("phone_number", payload.phone_number);

      const response = await updateProfile(id, formData, controller, token);
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(doLogin.pending, (prevState) => {
        return {
          ...prevState,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      })
      .addCase(doLogin.fulfilled, (prevState, action) => {
        return {
          ...prevState,
          isLoading: false,
          isFulfilled: true,
          data: action.payload,
        };
      })
      .addCase(doLogin.rejected, (prevState, action) => {
        return {
          ...prevState,
          isLoading: false,
          isRejected: true,
          err: action.payload,
        };
      })
      .addCase(doUpdateProfile.pending, (prevState, action) => {
        return {
          ...prevState,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      })
      .addCase(doUpdateProfile.fulfilled, (prevState, action) => {
        console.log(JSON.stringify(prevState.data), action);
        return {
          ...prevState,
          isLoading: false,
          isFulfilled: true,
          data: { ...prevState.data, ...action.payload },
        };
      })
      .addCase(doUpdateProfile.rejected, (prevState, action) => {
        return {
          ...prevState,
          isLoading: false,
          isRejected: true,
          err: action.payload,
        };
      });
  },
});

export const usersAction = {
  ...authSlice.actions,
  doLogin,
  doUpdateProfile,
};

export default authSlice.reducer;
