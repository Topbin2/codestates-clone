import { CourseSliceInitialState } from "./../types/courseTypes";
import { createSlice } from "@reduxjs/toolkit";
import { courseData } from "../utils/courseData";

const initialState: CourseSliceInitialState[] = courseData;

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
});

export default courseSlice.reducer;
