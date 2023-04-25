import { API_URL } from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import subscribeService from "../../services/subscribeService";
import { setMessage } from "./message";


export const subscribe = createAsyncThunk(
    API_URL.subscribe,
    async ({ email }, thunkAPI) => {
      try {
        const response = await subscribeService.subscribe(email);
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

  export const research = createAsyncThunk(
    API_URL.research,
    async ({ name, email }, thunkAPI) => {
      try {
        const response = await subscribeService.research(name, email);
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