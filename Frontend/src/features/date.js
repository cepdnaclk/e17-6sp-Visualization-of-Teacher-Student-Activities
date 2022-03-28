import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = "";

export const dateSlice = createSlice({
    name: "date",
    initialState: { value: initialStateValue },
    reducers: {
        set: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { set } = dateSlice.actions;

export default dateSlice.reducer;