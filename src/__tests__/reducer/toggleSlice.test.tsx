import toggleReducer, {
  toggleDarkMode,
  toggleProfileDropDownClose,
  toggleProfileDropDownOpen,
} from "../../reducers/toggleSlice";

describe("toggleSlice", () => {
  it("initial state를 리턴한다.", () => {
    const result = toggleReducer(undefined, { type: undefined });
    expect(result).toEqual({
      darkMode: false,
      profileDropDown: false,
    });
  });

  it("toggleDarkMode action은 darkMode 상태를 토글 한다.", () => {
    const prevState = { darkMode: false, profileDropDown: false };
    const result = toggleReducer(prevState, toggleDarkMode());
    expect(result).toEqual({
      darkMode: true,
      profileDropDown: false,
    });
  });

  it("toggleProfileDropDownOpen action은 profileDropDown 상태를 true로 변경한다.", () => {
    const prevState = { darkMode: false, profileDropDown: false };
    const result = toggleReducer(prevState, toggleProfileDropDownOpen());
    expect(result).toEqual({
      darkMode: false,
      profileDropDown: true,
    });
  });

  it("toggleProfileDropDownClose action은 profileDropDown 상태를 false로 변경한다.", () => {
    const prevState = { darkMode: false, profileDropDown: true };
    const result = toggleReducer(prevState, toggleProfileDropDownClose());
    expect(result).toEqual({
      darkMode: false,
      profileDropDown: false,
    });
  });
});
