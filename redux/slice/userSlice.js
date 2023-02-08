import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        patientBarChartinfo: {},
        patientBarChartisLoading: false,
    },
    reducers: {
        patientBarAction: (state, { payload }) => {
            state.patientBarChartinfo = payload.response;
            state.patientBarChartisLoading = payload.isLoading;
        },

    },
});

export const {
    patientBarAction,
} = userSlice.actions;

export const userSelector = (state) => state.user;
const userReducer = userSlice.reducer;
export default userReducer;
