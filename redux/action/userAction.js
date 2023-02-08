import { errorToast, successToast, warnToast } from "<prefix>/Components/helper";
import axios from "axios";
import { APIService } from "redux/api/ApiService";
import { BASE_URL, patientBarChartUrl, patientEnrolledBarChartUrl, patientAlcoholUsedPieChartUrl, patientEnrolledPieChartUrl, patientSmokePieChartUrl, patientAgeGroupDeliveryPieChartUrl, patientHealthInsurancePieChartUrl, patientLackOfTransportationsPieChartUrl,patientAgeDeliveryBarChartUrl } from "../api/configApiURL";
import {
    patientBarAction, patientEnrolledBarAction, patientAlcoholUsedPieChartAction, patientEnrolledPieChartAction, patientSmokeUsedPieChartAction, patientAgeDeliveryBarChartAction, patientAgeGroupDeliveryPieChartAction, patientHealthInsurancePieChartAction, patientLackOfTransportationsPieChartAction
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
        dispatch(patientAlcoholUsedPieChartAction({ isLoading: true }));
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
        dispatch(patientEnrolledPieChartAction({ isLoading: true }));
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

export function postPatientSmokeUsedPieChartApi(params) {
    return async (dispatch) => {
        dispatch(patientSmokeUsedPieChartAction({ isLoading: true }));
        APIService("POST", patientSmokePieChartUrl, params)
            .then((res) => {
                // console.log("delivery",res)
                if (res.status === "success") {
                    dispatch(patientSmokeUsedPieChartAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch(patientSmokeUsedPieChartAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch(patientSmokeUsedPieChartAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function postPatientAgeDeliveryBarChartApi(params) {
    return async (dispatch) => {
        dispatch(patientAgeDeliveryBarChartAction({ isLoading: true }));
        APIService("POST", patientAgeDeliveryBarChartUrl, params)
            .then((res) => {
                console.log("delivery", res)
                if (res.status === "success") {
                    dispatch(patientAgeDeliveryBarChartAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch(patientAgeDeliveryBarChartAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch(patientAgeDeliveryBarChartAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function postPatientAgeGroupDeliveryPieChartApi(params) {
    return async (dispatch) => {
        dispatch(patientAgeGroupDeliveryPieChartAction({ isLoading: true }));
        APIService("POST", patientAgeGroupDeliveryPieChartUrl, params)
            .then((res) => {
                console.log("delivery", res)
                if (res.status === "success") {
                    dispatch(patientAgeGroupDeliveryPieChartAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch(patientAgeGroupDeliveryPieChartAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch(patientAgeGroupDeliveryPieChartAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function postPatientHealthInsurancePieChartApi(params) {
    return async (dispatch) => {
        dispatch(patientHealthInsurancePieChartAction({ isLoading: true }));
        APIService("POST", patientHealthInsurancePieChartUrl, params)
            .then((res) => {
                // console.log("delivery",res)
                if (res.status === "success") {
                    dispatch(patientHealthInsurancePieChartAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch(patientHealthInsurancePieChartAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch(patientHealthInsurancePieChartAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}
export function postPatientStressedPieChartApi(params) {
    return async (dispatch) => {
        dispatch(patientStressedPieChartAction({ isLoading: true }));
        APIService("POST", patientStressedPieChartUrl, params)
            .then((res) => {
                // console.log("delivery",res)
                if (res.status === "success") {
                    dispatch(patientStressedPieChartAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch(patientStressedPieChartAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch(patientStressedPieChartAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}
export function postPatientLackOfTransportationsPieChartApi(params) {
    return async (dispatch) => {
        dispatch(patientLackOfTransportationsPieChartAction({ isLoading: true }));
        APIService("POST", patientLackOfTransportationsPieChartUrl, params)
            .then((res) => {
                // console.log("delivery",res)
                if (res.status === "success") {
                    dispatch(patientLackOfTransportationsPieChartAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch(patientLackOfTransportationsPieChartAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch(patientLackOfTransportationsPieChartAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}