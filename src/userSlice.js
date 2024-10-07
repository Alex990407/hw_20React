import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectUsers = (state) => state.users.users; // Селектор для получения пользователей
export default userSlice.reducer;
