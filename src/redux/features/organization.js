import { API_URL } from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import organizationService from "../../services/organizationService";
import { setMessage } from "./message";



export const organizationThunk = createAsyncThunk(
    API_URL.company,
    async ({ agent_name,company_name,email,phone_number,message }, thunkAPI) => {
      try {
        const response = await organizationService.organization(agent_name,company_name,email,phone_number,message);
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