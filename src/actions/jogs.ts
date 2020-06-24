import { Jog } from "../types/jogs";
import { Dispatch } from "redux";
import { ApplicationState } from "../reducers";
import axios from "axios";

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
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "REQUEST_JOGS" });

      try {
        const token = "";

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

        dispatch({ type: "RECEIVE_JOGS", jogs: response.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "RECEIVE_JOGS_FAILED", error: error.response.status });
      }
    };
  },
  receiveJogs: (): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "REQUEST_JOGS" });

      try {
        const token = "";

        const response = await axios.get(
          "https://jogtracker.herokuapp.com/api/v1/data/sync",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        dispatch({ type: "RECEIVE_JOGS", jogs: response.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "RECEIVE_JOGS_FAILED", error: error.response });
      }
    };
  },
};
