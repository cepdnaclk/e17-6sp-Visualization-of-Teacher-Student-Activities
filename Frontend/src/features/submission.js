import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = "";

export const submissionSlice = createSlice({
    name: "submission",
    initialState: { value: initialStateValue },
    reducers: {
        set: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { set } = submissionSlice.actions;

export default submissionSlice.reducer;