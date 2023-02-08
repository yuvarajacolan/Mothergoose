import axios from "axios";
import { BASE_URL, signInUrl } from "../api/configApiURL";
import {
    signInAction,
} from "../slice/authSlice";
// import { errorToast, successToast } from "../../components/helper";

export function signInApi(data) {
    return async (dispatch) => {
        dispatch(signInAction({ isLoading: true }));
        axios
            .post(`${BASE_URL}${signInUrl}`, data)
            .then((user) => {
                // const { status, response, message } = user.data;
                console.log("API SUCESS FULL ", user)
                dispatch(signInAction({ isLoading: false, response: user }));
                // if (user.status === 200) {
                //     successToast("User signed in successfully");
                //     if (user?.data?.roles[0] === "ROLE_USER") {
                //         router.push("/user/getstarted");
                //         sessionStorage.setItem(
                //             "currencyTokenId",
                //             user?.data?.currencyTokenId
                //         );
                //     } else if (user?.data?.roles[0] === "ROLE_ADMIN") {
                //         router.push("/admin/token");
                //     }
                //     sessionStorage.setItem(
                //         "accessToken",
                //         "Bearer " + user?.data?.accessToken
                //     );
                // sessionStorage.setItem("refreshToken", user?.data?.refreshToken);
                // sessionStorage.setItem("userId", user?.data?.id);
                // sessionStorage.setItem("email", user?.data?.email);
                // sessionStorage.setItem("roles", user?.data?.roles[0]);
                // sessionStorage.setItem("username", user?.data?.username);
                // sessionStorage.setItem("walletID", user?.data?.walletId);
                // sessionStorage.setItem("nickname", user?.data?.firstname);
                // sessionStorage.setItem("walletBal", user?.data?.walletBal);
                // } else {
                //     errorToast(message);
                //     dispatch(signInAction({ isLoading: false }));
                // }
            })
            .catch((e) => {
                console.log("BAD REQUEST", e)
                // errorToast("Bad Credentials");
                dispatch(signInAction({ isLoading: false }));
            });
    };
}