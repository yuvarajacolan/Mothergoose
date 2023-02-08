import { errorToast,successToast } from "<prefix>/Components/helper";
import axios from "axios";
import { APIService } from "redux/api/ApiService";
import { BASE_URL, patientBarChartUrl } from "../api/configApiURL";
import {
    patientBarAction,
} from "../slice/userSlice";

export function postPatientBarChatApi(params) {
    const access =
      typeof window !== "undefined" ? sessionStorage.getItem("access") : "";
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
  