import { API_URL } from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import requestService from "../../services/requestService";
import { setMessage } from "./message";



export const requestThunk = createAsyncThunk(
    API_URL.request,
    async ({ email }, thunkAPI) => {
      try {
        const response = await requestService.request(email);
        thunkAPI.dispatch(setMessage(response.data.message));
        return response.data;
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