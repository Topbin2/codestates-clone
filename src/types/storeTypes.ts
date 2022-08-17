import { rootReducer, setupStore } from "../store/store";

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export type CreateAsyncThunkTypes = {
  dispatch: AppDispatch;
  state: RootState;
  rejectValue: string;
};
