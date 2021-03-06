import { Reducer, Action } from "redux";
import { knownAction } from "../actions/filter";

export const initialState = {
  isFilterEnabled: false,
  startDate: null,
  endDate: null,
};

export interface FilterState {
  isFilterEnabled: boolean;
  startDate: Date | null;
  endDate: Date | null;
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
    case "SET_START_DATE":
      return { ...state, startDate: action.date };
    case "SET_END_DATE":
      return { ...state, endDate: action.date };
    default:
      return state;
  }
};
