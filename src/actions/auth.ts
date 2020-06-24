import { ApplicationState } from "../reducers";
import axios from "axios";
import { Dispatch } from "redux";

export interface RequestToken {
  type: "REQUEST_TOKEN";
}

export interface ReceiveToken {
  type: "RECEIVE_TOKEN";
  token: string;
}

export interface SetToken {
  type: "SET_TOKEN";
  token: string;
}

export interface SetAnauth {
  type: "SET_ANAUTH";
  token: string;
}

export type knownAction = RequestToken | ReceiveToken | SetToken | SetAnauth;

export const actionCreators = {
  setAnAuth: (token: string = "") => ({ type: "SET_ANAUTH", token: token }),
  setToken: (token: string) => ({ type: "SET_TOKEN", token }),
  getToken: (): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "REQUEST_TOKEN" });

      try {
        let formData = new FormData();
        formData.append("uuid", "hello");

        const response = await axios.post(
          "https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin",
          formData
        );

        console.log(response);

        const token = response.data.response.access_token;
        dispatch({
          type: "RECEIVE_TOKEN",
          token,
        });

        localStorage.setItem("token", token);
      } catch (error) {
        console.log(error);
      }
    };
  },
};
