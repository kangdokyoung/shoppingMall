import { createSlice } from "@reduxjs/toolkit";

// DetailMenu toggle State
export interface ToggleBannerState {
  bannerToggle: boolean;
}

const initialBannerState: ToggleBannerState = {
  bannerToggle: false,
};

export const toggleSlice = createSlice({
  name: "bannerToggle",
  initialState: initialBannerState,
  reducers: {
    changeBannerToggle: (state) => {
      state.bannerToggle = !state.bannerToggle;
    },
  },
});

// Search toggle state
export interface ToggleSearchState {
  searchToggle: boolean;
}

const initialSearchState: ToggleSearchState = {
  searchToggle: false,
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState: initialSearchState,
  reducers: {
    changeSearchToggle: (state) => {
      state.searchToggle = !state.searchToggle;
    },
  },
});

export const { changeBannerToggle } = toggleSlice.actions;
export const { changeSearchToggle } = searchSlice.actions;
