import { API_URL } from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { engineersService } from "../../services/engineerService";
import { setMessage } from "./message";

export const engineersThunk = createAsyncThunk(
    API_URL.engineers,
    async ({ name,email,gender,nationality,bio,python_proficiency,sql_proficiency,data_experience }, thunkAPI) => {
      try {
        const response = await engineersService.engineers(name,email,gender,nationality,bio,python_proficiency,sql_proficiency,data_experience);
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