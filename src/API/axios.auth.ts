import axios from "axios";
import { IDataLogin, IDataRegister } from "../types/userTypes";
import { setTokenToLocalStorage } from "../helpers/localstorage.helper";
import { authStore } from "../store/auth.store";
import { notificator } from "../store/notify.store";

export const authRegister = async (dataUser: IDataRegister): Promise<any> => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKEND_ORIGIN + "/api/auth/signin",
      dataUser,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const { token } = response.data;
    return token;
  } catch (error) {
    return error;
  }
};
export const authLogin = async (dataUser: IDataLogin): Promise<any> => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKEND_ORIGIN + "/api/auth/signin",
      dataUser,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { accessToken, refreshToken } = response.data;
    setTokenToLocalStorage("refreshToken", refreshToken);
    return accessToken;
  } catch (error) {
    return error;
  }
};
export const getNewJWTToken = async (refreshToken: string): Promise<any> => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKEND_ORIGIN + "/api/auth/access-token",
      {
        refreshToken: refreshToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { accessToken } = response.data;
    return accessToken;
  } catch (error) {
    notificator.push({children: `${error}`, type: "error"});
    console.log(error);
  }
};
