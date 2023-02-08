import { errorToast,successToast } from "<prefix>/Components/helper";
import axios from "axios";
import { APIService } from "redux/api/ApiService";
import { BASE_URL, patientBarChartUrl,patientEnrolledBarChartUrl } from "../api/configApiURL";
import {
    patientBarAction,
} from "../slice/userSlice";

export function postPatientBarChatApi(params) {
    
    return async (dispatch) => {
        dispatch(patientBarAction({ isLoading: true }));
        APIService("POST", patientBarChartUrl, params)
        .then((res) => {
            console.log('barchat',res)
            dispatch(patientBarAction({ isLoading: false, response: user }));

        //   if (res.data.status === "success") {
        //     dispatch(patientBarAction({ isLoading: false, response: user }));
        //     successToast(res.data.message);
        //   } else {
        //     dispatch(patientBarAction({ isLoading: false }));
        //     warnToast("Failed to fetch my data");
        //   }
        })
        .catch((e) => {
        dispatch(patientBarAction({ isLoading: false }));
        errorToast("Failed to fetch my data");
          console.log("Error Occured", e);
        });
    };
  }

export function postPatientEnrolledBarChatApi() {
    
    return async (dispatch) => {
        dispatch(patientEnrolledBarAction({ isLoading: true }));
        APIService("POST", patientEnrolledBarChartUrl, params)
        .then((res) => {
            console.log('barchat',res)
            dispatch(patientEnrolledBarAction({ isLoading: false, response: user }));

        //   if (res.data.status === "success") {
        //     dispatch(patientEnrolledBarAction({ isLoading: false, response: user }));
        //     successToast(res.data.message);
        //   } else {
        //     dispatch(patientEnrolledBarAction({ isLoading: false }));
        //     warnToast("Failed to fetch my data");
        //   }
        })
        .catch((e) => {
        dispatch(patientEnrolledBarAction({ isLoading: false }));
        errorToast("Failed to fetch my data");
          console.log("Error Occured", e);
        });
    };
}

export function postPatientEnrolledBarChatApi() {
    
    return async (dispatch) => {
        dispatch( patientAlcoholUsedPieChartAction({ isLoading: true }));
        APIService("POST", patientAlcoholUsedPieChartUrl, params)
        .then((res) => {
            console.log('barchat',res)
            dispatch(patientAlcoholUsedPieChartAction({ isLoading: false, response: user }));

        //   if (res.data.status === "success") {
        //     dispatch(patientAlcoholUsedPieChartAction({ isLoading: false, response: user }));
        //     successToast(res.data.message);
        //   } else {
        //     dispatch(patientAlcoholUsedPieChartAction({ isLoading: false }));
        //     warnToast("Failed to fetch my data");
        //   }
        })
        .catch((e) => {
        dispatch(patientAlcoholUsedPieChartAction({ isLoading: false }));
        errorToast("Failed to fetch my data");
          console.log("Error Occured", e);
        });
    };
}
  