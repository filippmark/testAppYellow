import { Reducer, Action } from "redux";
import { knownAction } from "../actions/auth";

const initialState = {
  token: "",
  isAuth: false,
};

export interface AuthState {
  token: string;
  isAuth: boolean;
}

export const reducer: Reducer<AuthState> = (
  state: AuthState | undefined,
  incomingAction: Action
): AuthState => {
  if (state === undefined) {
    return initialState;
  }

  const action = incomingAction as knownAction;
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.token, isAuth: true };
    default:
      return state;
  }
};
