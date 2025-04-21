import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice for managing the app's state.
 */
export const appSlice = createSlice({
    name: "app",
    initialState: {
        language: "en"
    },
    reducers: {
        getLanguage: (state, action ) => {
            return state.language;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        }
    }
})

export const { getLanguage, setLanguage} = appSlice.actions;
export default appSlice.reducer;