import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

export const initBookmarked = createAsyncThunk(
  "bookmarked/initBookmarked",
  async () => JSON.parse((await AsyncStorage.getItem("bookmarked")) ?? "[]"),
);

export const addBookmarked = createAsyncThunk(
  "bookmarked/addBookmarked",
  async (id: string, api) => {
    const state = api.getState() as string[];
    state.push(id);
    await AsyncStorage.setItem("bookmarked", JSON.stringify([...state]));
    return state;
  },
);

export const removeBookmarked = createAsyncThunk(
  "bookmarked/removeBookmarked",
  async (id: string, api) => {
    let state = api.getState() as string[];
    state = state.filter((bookmarked) => bookmarked !== id);
    await AsyncStorage.setItem("bookmarked", JSON.stringify([...state]));
    return state;
  },
);

export const toggleBookmarked = createAsyncThunk(
  "bookmarked/toggleBookmarked",
  async (id: string, api) => {
    let state = api.getState() as string[];

    if (state.some((bookmarked) => bookmarked === id)) {
      state = state.filter((bookmarked) => bookmarked !== id);
      await AsyncStorage.setItem("bookmarked", JSON.stringify([...state]));
      return state;
    }

    state.push(id);
    await AsyncStorage.setItem("bookmarked", JSON.stringify([...state]));
    return state;
  },
);

export const bookmarkedSlice = createSlice({
  name: "bookmarked",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initBookmarked.fulfilled, (_, action) => action.payload);
    builder.addCase(addBookmarked.fulfilled, (_, action) => action.payload);
    builder.addCase(removeBookmarked.fulfilled, (_, action) => action.payload);
    builder.addCase(toggleBookmarked.fulfilled, (_, action) => action.payload);
  },
});
