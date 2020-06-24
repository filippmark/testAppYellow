import { Jog } from "../types/jogs";
import { Dispatch } from "redux";
import { ApplicationState } from "../reducers";
import axios from "axios";
import { knownAction as authActions } from "./auth";

export interface RequestJogsAction {
  type: "REQUEST_JOGS";
}

export interface ReceiveJogsAction {
  type: "RECEIVE_JOGS";
  jogs: Jog[];
}

export interface ReceiveJogsFailedAction {
  type: "RECEIVE_JOGS_FAILED";
  error: number;
}

export type knownAction =
  | RequestJogsAction
  | ReceiveJogsAction
  | ReceiveJogsFailedAction;

export const actionCreators = {
  addJog: (jog: { date: string; time: number; distance: number }): any => {
    return async (
      dispatch: Dispatch<knownAction | authActions>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "REQUEST_JOGS" });

      try {
        const token = getState().auth.token;

        let formData = new FormData();
        formData.append("date", jog.date);
        formData.append("time", jog.time.toString());
        formData.append("date", jog.distance.toString());

        const response = await axios.post(
          "https://jogtracker.herokuapp.com/api/v1/data/sync",
          formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log(response);

        dispatch({ type: "RECEIVE_JOGS", jogs: response.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "RECEIVE_JOGS_FAILED", error: error.response.status });
        if (error.response.status === 401) {
          dispatch({ type: "SET_ANAUTH", token: "" });
        }
      }
    };
  },
  receiveJogs: (): any => {
    return async (
      dispatch: Dispatch<knownAction | authActions>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "REQUEST_JOGS" });

      try {
        const token = getState().auth.token;

        const response = await axios.get(
          "https://jogtracker.herokuapp.com/api/v1/data/sync",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log(response);

        dispatch({ type: "RECEIVE_JOGS", jogs: response.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "RECEIVE_JOGS_FAILED", error: error.response.status });
        if (error.response.status === 401) {
          dispatch({ type: "SET_ANAUTH", token: "" });
        }
      }
    };
  },
};
