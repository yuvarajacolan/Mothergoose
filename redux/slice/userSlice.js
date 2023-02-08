import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        patientBarChartinfo: {},
        patientBarChartisLoading: false,
        patientEnrolledBarChartinfo: {},
        patientEnrolledBarChartisLoading: false,
        patientAlcoholUsedPieChartinfo: {},
        patientAlcoholUsedPieChartisLoading: false,
    },
    reducers: {
        patientBarAction: (state, { payload }) => {
            state.patientBarChartinfo = payload.response;
            state.patientBarChartisLoading = payload.isLoading;
        },
        patientEnrolledBarAction: (state, { payload }) => {
            state.patientEnrolledBarChartinfo = payload.response;
            state.patientEnrolledBarChartisLoading = payload.isLoading;
        },
        patientAlcoholUsedPieChartAction: (state, { payload }) => {
            state.patientAlcoholUsedPieChartinfo = payload.response;
            state.patientAlcoholUsedPieChartisLoading = payload.isLoading;
        },

    },
});

export const {
    patientBarAction,
    patientEnrolledBarAction,
    patientAlcoholUsedPieChartAction
} = userSlice.actions;

export const userSelector = (state) => state.user;
const userReducer = userSlice.reducer;
export default userReducer;
