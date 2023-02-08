import axios from "axios";
import router from "next/router";
import { BASE_URL } from "../../src/Components/constants";

export const RefreshToken = () => {
  const refresh_token = typeof window !== "undefined" ? sessionStorage.getItem("refreshToken") : "";
  axios.post(`${BASE_URL}/refresh/${refresh_token}`).then((token) => {
    const { data } = token;
    sessionStorage.setItem("accessToken", "Bearer" + data.accessToken);
    sessionStorage.setItem("refreshToken", data.refreshToken);
    router.reload(window.location.pathname);
  });
};
export const APIService = async (method, url, body) => {
  const accessToken = typeof window !== "undefined" ? sessionStorage.getItem("accessToken") : "";
    const userId = typeof window !== "undefined" ? sessionStorage.getItem("userId") : "";


  function baseUrl() {
  
      return `${BASE_URL}`;
    
  }

  return await axios({
    method: method,
    baseURL: baseUrl(),
    url: url,
    headers: {
      Authorization: accessToken,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: body,
  })
    .then((e) => {
        console.log('sucessinAPIservice',e)

      const { data } = e;
      if (userId === null || undefined || "") {
        router.push("/auth/login");
      } else if (data.status === 200 || data.status === "success") {
        return {
          status: "success",
          data: data,
          message: data.message,
        };
      } else {
        return {
          status: "error",
          message: data.message,
        };
      }
    })
    .catch((e) => {
        console.log('ErrorinAPIservice',e)
      if (e.message === "Network Error") {
        //router.push("/common/network-issue");
      }
      const refreshToken =
        typeof window !== "undefined"
          ? sessionStorage.getItem("refreshToken")
          : "";
      if (e.response.status === 401) {
        axios
          .post(`${BASE_URL}refreshtoken/${refreshToken}`)
          .then((token) => {
            const { data } = token;
            sessionStorage.setItem("accessToken", "Bearer " + data.accessToken);
            sessionStorage.setItem("refreshToken", data.refreshToken);
            router.reload(window.location.pathname);
          });
      }
      if (userId === null || undefined || "") {
        router.push("/auth/login");
      } else {
        //router.push("/common/internet-issue");
      }
    });
};
