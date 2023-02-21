import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        patientBarChartinfo: {},
        patientBarChartisLoading: false,
        patientBarChartisSuccess:false,
        patientEnrolledBarChartinfo: {},
        patientEnrolledBarChartisLoading: false,
        patientAlcoholUsedPieChartinfo: {},
        patientAlcoholUsedPieChartisLoading: false,
        patientEnrolledPieChartinfo: {},
        patientEnrolledPieChartisLoading: false,
        patientSmokeUsedPieChartinfo: {},
        patientSmokeUsedPieChartisLoading: false,
        patientAgeDeliveryBarChartinfo: {},
        patientAgeDeliveryBarChartisLoading: false,
        patientAgeGroupDeliveryPieChartinfo: {},
        patientAgeGroupDeliveryPieChartisLoading: false,
        patientHealthInsurancePieChartinfo: {},
        patientHealthInsurancePieChartisLoading: false,
        patientStressedPieChartinfo: {},
        patientStressedPieChartisLoading: false,
        patientLackOfTransportationsPieChartinfo: {},
        patientLackOfTransportationsPieChartisLoading: false,
        
    },
    reducers: {
        patientBarAction: (state, { payload }) => {
            state.patientBarChartinfo = payload.response;
            state.patientBarChartisLoading = payload.isLoading;
            state.patientBarChartisSuccess = payload.isSuccess
            
        },
        patientEnrolledBarAction: (state, { payload }) => {
            state.patientEnrolledBarChartinfo = payload.response;
            state.patientEnrolledBarChartisLoading = payload.isLoading;
        },
     
        patientAlcoholUsedPieChartAction: (state, { payload }) => {
            state.patientAlcoholUsedPieChartinfo = payload.response;
            state.patientAlcoholUsedPieChartisLoading = payload.isLoading;
        },
        patientEnrolledPieChartAction:(state, { payload }) => {
            state.patientEnrolledPieChartinfo = payload.response;
            state.patientEnrolledPieChartisLoading = payload.isLoading;
        },
        patientSmokeUsedPieChartAction: (state, { payload }) => {
            state.patientSmokeUsedPieChartinfo = payload.response;
            state.patientSmokeUsedPieChartisLoading = payload.isLoading;
        },
        patientAgeDeliveryBarChartAction: (state, { payload }) => {
            state.patientAgeDeliveryBarChartinfo = payload.response;
            state.patientAgeDeliveryBarChartisLoading = payload.isLoading;
        },
        patientAgeGroupDeliveryPieChartAction: (state, { payload }) => {
            state.patientAgeGroupDeliveryPieChartinfo = payload.response;
            state.patientAgeGroupDeliveryPieChartisLoading = payload.isLoading;
        },
        patientHealthInsurancePieChartAction: (state, { payload }) => {
            state. patientHealthInsurancePieChartinfo = payload.response;
            state. patientHealthInsurancePieChartisLoading = payload.isLoading;
        },
        patientStressedPieChartAction: (state, { payload }) => {
            state. patientStressedPieChartinfo = payload.response;
            state. patientStressedPieChartisLoading = payload.isLoading;
        },
        patientLackOfTransportationsPieChartAction: (state, { payload }) => {
            state. patientLackOfTransportationsPieChartinfo = payload.response;
            state. patientLackOfTransportationsPieChartisLoading = payload.isLoading;
        },

    },
});

export const {
    patientBarAction,
    patientEnrolledBarAction,
    patientAlcoholUsedPieChartAction,
    patientEnrolledPieChartAction,
    patientSmokeUsedPieChartAction,
    patientAgeDeliveryBarChartAction,
    patientAgeGroupDeliveryPieChartAction,
    patientHealthInsurancePieChartAction,
    patientStressedPieChartAction,
    patientLackOfTransportationsPieChartAction,

} = userSlice.actions;

export const userSelector = (state) => state.user;
const userReducer = userSlice.reducer;
export default userReducer;
