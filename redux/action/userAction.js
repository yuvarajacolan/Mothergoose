import { errorToast,successToast,warnToast } from "<prefix>/Components/helper";
import axios from "axios";
import { APIService } from "redux/api/ApiService";
import { BASE_URL, patientBarChartUrl,patientEnrolledBarChartUrl,patientAlcoholUsedPieChartUrl,patientEnrolledPieChartUrl } from "../api/configApiURL";
import {
    patientBarAction, patientEnrolledBarAction,patientAlcoholUsedPieChartAction,patientEnrolledPieChartAction
} from "../slice/userSlice";

export function postPatientBarChatApi(params) {
    
    return async (dispatch) => {
        dispatch(patientBarAction({ isLoading: true }));
        APIService("POST", patientBarChartUrl, params)
        .then((res) => {
          if (res.status === "success") {
            dispatch(patientBarAction({ isLoading: false, response: res.data }));
          } else {
            dispatch(patientBarAction({ isLoading: false }));
            warnToast("Failed to fetch my data");
          }
        })
        .catch((e) => {
        dispatch(patientBarAction({ isLoading: false }));
        errorToast("Failed to fetch my data");
          console.log("Error Occured", e);
        });
    };
  }

export function postPatientEnrolledBarChatApi(params) {
    
    return async (dispatch) => {
        dispatch(patientEnrolledBarAction({ isLoading: true }));
        APIService("POST", patientEnrolledBarChartUrl, params)
        .then((res) => {

          if (res.status === "success") {
            dispatch(patientEnrolledBarAction({ isLoading: false, response: res.data }));
          } else {
            dispatch(patientEnrolledBarAction({ isLoading: false }));
            warnToast("Failed to fetch my data");
          }
        })
        .catch((e) => {
        dispatch(patientEnrolledBarAction({ isLoading: false }));
        errorToast("Failed to fetch my data");
          console.log("Error Occured", e);
        });
    };
}

export function postPatientAlcoholUsedPieChartApi(params) { 
    return async (dispatch) => {
        dispatch( patientAlcoholUsedPieChartAction({ isLoading: true }));
        APIService("POST", patientAlcoholUsedPieChartUrl, params)
        .then((res) => {
          if (res.status === "success") {
            dispatch(patientAlcoholUsedPieChartAction({ isLoading: false, response: res.data }));
          } else {
            dispatch(patientAlcoholUsedPieChartAction({ isLoading: false }));
            warnToast("Failed to fetch my data");
          }
        })
        .catch((e) => {
        dispatch(patientAlcoholUsedPieChartAction({ isLoading: false }));
        errorToast("Failed to fetch my data");
          console.log("Error Occured", e);
        });
    };
}

export function postPatientPieChartApi(params) { 
    return async (dispatch) => {
        dispatch( patientEnrolledPieChartAction({ isLoading: true }));
        APIService("POST", patientEnrolledPieChartUrl, params)
        .then((res) => {
          if (res.status === "success") {
            dispatch(patientEnrolledPieChartAction({ isLoading: false, response: res.data }));
          } else {
            dispatch(patientEnrolledPieChartAction({ isLoading: false }));
            warnToast("Failed to fetch my data");
          }
        })
        .catch((e) => {
        dispatch(patientEnrolledPieChartAction({ isLoading: false }));
        errorToast("Failed to fetch my data");
          console.log("Error Occured", e);
        });
    };
}
  
  