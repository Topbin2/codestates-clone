import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/storeTypes";
import type { TypedUseSelectorHook } from "react-redux";
import store from "../store/store";

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
