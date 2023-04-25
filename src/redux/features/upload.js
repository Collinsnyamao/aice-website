import { API_URL} from '../api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import uploadService from '../../services/upload';
import { setMessage } from './message';

export const uploadThunk = createAsyncThunk(
    API_URL.upload,
    async ({ title,key_words,fieds,abstract,file }, thunkAPI) => {
      try {
        const response = await uploadService.upload(title,key_words,fieds,abstract,file);
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