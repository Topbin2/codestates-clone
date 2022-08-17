import { useAppSelector } from "./reduxHooks";
export const useToggleDarkMode = () => {
  const { darkMode } = useAppSelector((state) => state.toggle);
  return darkMode;
};
