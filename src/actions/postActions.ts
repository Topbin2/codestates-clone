import { GetPostsResponseType } from "../types/postTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { custom } from "../utils/axios";
import { CreateAsyncThunkTypes } from "../types/storeTypes";

export const getPosts = createAsyncThunk<
  GetPostsResponseType[],
  undefined,
  CreateAsyncThunkTypes
>("post/getPosts", async (_, thunkAPI) => {
  try {
    const response = await custom.get("/posts");
    return response.data.slice(0, 12);
  } catch (error: any) {
    thunkAPI.rejectWithValue(error);
  }
});
