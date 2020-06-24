import { Reducer, Action } from "redux";
import { knownAction } from "../actions/auth";

const initialState = {
  token: "",
  isAuth: false,
  isLoading: false,
};

export interface AuthState {
  token: string;
  isAuth: boolean;
  isLoading: boolean;
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
    case "SET_ANAUTH":
      return { ...state, token: action.token, isAuth: false };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "REQUEST_TOKEN":
      return { ...state, isLoading: true };
    case "RECEIVE_TOKEN":
      return { ...state, token: action.token, isLoading: false, isAuth: true };
    default:
      return state;
  }
};
