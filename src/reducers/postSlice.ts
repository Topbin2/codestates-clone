import faker from "faker";
import { PostSliceInitialState } from "./../types/postTypes";
import { createSlice, Reducer } from "@reduxjs/toolkit";
import { getPosts } from "../actions/postActions";
import { v4 as uuidv4 } from "uuid";

const initialState: PostSliceInitialState = {
  isLoading: false,
  errorMsg: "",
  posts: [],
  sortedPosts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    sortByViews: (state) => {
      const newPosts = [...state.posts];
      state.sortedPosts = newPosts.sort((a, b) => b.views - a.views);
    },
  },
  extraReducers: (builder) =>
    builder
      // getPosts
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        const addedViewsProperty = payload.map((post) => {
          const randomNumber = Math.floor(Math.random() * 999);
          return {
            ...post,
            views: randomNumber,
            id: uuidv4(),
            url: faker.image.image(),
          };
        });
        state.isLoading = false;
        state.posts.push(...addedViewsProperty);
      })
      .addCase(getPosts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      }),
});

export const { sortByViews } = postSlice.actions;
export const postReducer: Reducer<typeof initialState> = postSlice.reducer;
