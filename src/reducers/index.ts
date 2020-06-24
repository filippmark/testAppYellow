import * as Auth from "./auth";
import * as Filter from "./filter";
import * as Jogs from "./jogs";

export interface ApplicationState {
  auth: Auth.AuthState;
  filter: Filter.FilterState;
  jogs: Jogs.JogsState;
}

export const reducers = {
  auth: Auth.reducer,
  filter: Filter.reducer,
  jogs: Jogs.reducer,
};
