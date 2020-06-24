import { Reducer, Action } from "redux";
import { knownAction } from "../actions/jogs";
import { Jog } from "../types/jogs";

const initialState = {
  isLoading: false,
  jogs: [],
  errorCode: 0,
};

export interface JogsState {
  isLoading: boolean;
  jogs: Jog[];
  errorCode: number;
}

export const reducer: Reducer<JogsState> = (
  state: JogsState | undefined,
  incomingAction: Action
): JogsState => {
  if (state === undefined) {
    return initialState;
  }

  const action = incomingAction as knownAction;
  switch (action.type) {
    case "RECEIVE_JOGS":
      return { ...state, isLoading: false, jogs: action.jogs };
    case "REQUEST_JOGS":
      return { ...state, isLoading: true, jogs: [], errorCode: 0 };
    case "RECEIVE_JOGS_FAILED":
      return { ...state, isLoading: false, errorCode: action.error };
    default:
      return state;
  }
};
