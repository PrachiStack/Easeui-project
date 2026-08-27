import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ThemeState = {
  mode: "light" | "dark";
};

const initialState: ThemeState = {
  mode: "light",
};

const updateDOMTheme = (mode: "light" | "dark") => {
  localStorage.setItem("theme", mode);
  document.documentElement.setAttribute("data-theme", mode);
  if (mode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      updateDOMTheme(state.mode);
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload;
      updateDOMTheme(action.payload);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
