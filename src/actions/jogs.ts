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

export interface RequestAddJogAction {
  type: "REQUEST_ADD_JOG";
}

export interface ReceiveJogAddAction {
  type: "RECEIVE_ADD_JOG";
  jog: Jog;
}

export interface ReceiveJogsAddFailedAction {
  type: "RECEIVE_JOGS_ADD_FAILED";
  error: number;
}

export type knownAction =
  | RequestJogsAction
  | ReceiveJogsAction
  | ReceiveJogsFailedAction
  | RequestAddJogAction
  | ReceiveJogAddAction
  | ReceiveJogsAddFailedAction;

export const actionCreators = {
  addJog: (jog: { date: string; time: number; distance: number }): any => {
    return async (
      dispatch: Dispatch<knownAction | authActions>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "REQUEST_ADD_JOG" });

      try {
        const token = getState().auth.token;

        let formData = new FormData();
        formData.append("date", jog.date);
        formData.append("time", jog.time.toString());
        formData.append("distance", jog.distance.toString());

        const response = await axios.post(
          "https://jogtracker.herokuapp.com/api/v1/data/jog",
          formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log(response);

        let jogData = response.data.response;
        const jogReceived: Jog = {
          distance: jogData.distance,
          date: Date.parse(jogData.date),
          time: jogData.time,
          id: jogData.id,
          user_id: jogData.user_id,
        };

        dispatch({ type: "RECEIVE_ADD_JOG", jog: jogReceived });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "RECEIVE_JOGS_ADD_FAILED",
          error: error.response.status,
        });
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

        const jogs: Jog[] = response.data.response.jogs.map((jog: Jog): Jog => ({
          ...jog,
          date: jog.date * 1000
        })).reverse();

        dispatch({ type: "RECEIVE_JOGS", jogs });
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
