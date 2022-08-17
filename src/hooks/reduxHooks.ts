import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/storeTypes";
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch } from "../types/storeTypes";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
