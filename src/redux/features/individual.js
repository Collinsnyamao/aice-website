import { API_URL } from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import individualService from "../../services/individualService";
import { setMessage } from "./message";



export const individualThunk = createAsyncThunk(
    API_URL.individual,
    async ({ first_name,last_name,email,phone_number,message }, thunkAPI) => {
      try {
        const response = await individualService.individual(first_name,last_name,email,phone_number,message);
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