import { Reducer, Action } from "redux";
import { knownAction } from "../actions/filter";

export const initialState = {
  isFilterEnabled: false,
};

export interface FilterState {
  isFilterEnabled: boolean;
}

export const reducer: Reducer<FilterState> = (
  state: FilterState | undefined,
  incomingAction: Action
): FilterState => {
  if (state === undefined) {
    return initialState;
  }

  const action = incomingAction as knownAction;
  switch (action.type) {
    case "ENABLE_FILTER":
      return { ...state, isFilterEnabled: true };
    case "DISABLE_FILTER":
      return { ...state, isFilterEnabled: false };
    default:
      return state;
  }
};
