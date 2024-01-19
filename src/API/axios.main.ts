import axios from "axios";
import { getTokenFromLocalStorage } from "../helpers/localstorage.helper";
import { authStore } from "../store/auth.store";
import { resreshTokenHelper } from "../helpers/auth.helper";
import { getMeHelper } from "../helpers/main.helper";
import { notificator } from "../store/notify.store";

export const getMe = async (): Promise<any> => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_ORIGIN + "/api/employees/me",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getTokenFromLocalStorage("token")}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    notificator.push({children: `Ошибка логина: ${error}`, type: "error"});
    // resreshTokenHelper(getTokenFromLocalStorage("refreshToken"), getMeHelper);
  }
};
