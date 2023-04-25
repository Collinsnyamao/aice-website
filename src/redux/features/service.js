import { API_URL } from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { businesService } from "../../services/businesService";
import { setMessage } from "./message";

export const serviceThunk = createAsyncThunk(
    API_URL.service,
    async ({ name,company,designation,service,email }, thunkAPI) => {
      try {
        const response = await businesService.service(name,company,designation,service,email);
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