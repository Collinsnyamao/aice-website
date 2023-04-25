import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authService";
import { setMessage } from "./message";
import jwt_decode from "jwt-decode";
// import { API_URL } from "../api";

const user = JSON.parse(localStorage.getItem("user") || null);

export const register = createAsyncThunk(
  "https://aicenterofexcellence.herokuapp.com/register/",
  async (
    {
      username,
      firstname,
      lastname,
      email,
      description,
      company,
      designation,
      password,
    },
    thunkAPI
  ) => {
    try {
      const response = await authService.register(
        username,
        firstname,
        lastname,
        email,
        description,
        company,
        designation,
        password
      );
      thunkAPI.dispatch(setMessage(response.data.message));
      console.log(response.status);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "https://aicenterofexcellence.herokuapp.com/login/",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await authService.Login(email, password);
      const decodedData = jwt_decode(data.access);
      console.log(decodedData);
      localStorage.setItem("user", JSON.stringify(decodedData));
      return { user: decodedData };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  // await authService.logout()
});

// describe the initial state
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggeIn: false, user: null };

// create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [`${register.fulfilled}`]: (state, action) => {
      state.isLoggedIn = false;
    },
    [`${register.rejected}`]: (state, action) => {
      state.isLoggedIn = false;
    },
    [`${login.fulfilled}`]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [`${login.rejected}`]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [`${logout.fulfilled}`]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
